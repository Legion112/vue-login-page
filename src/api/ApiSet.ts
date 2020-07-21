import http from '@/plugins/axios';
export class ApiSet {
  private readonly url: string
  private readonly defaultData: () => object
  data: object
  errors: Errors = {};
  loading: boolean;
  constructor(url: string, defaultData: () => object) {
    this.url = url
    this.defaultData = defaultData;
    this.data = defaultData();
    this.loading = false;
  }
  async submit(): Promise<ResponseOk|ResponseError>{
    try {
      this.loading = true;
      await http.post(this.url, this.data);
      return {ok: true, message: 'Success'}
    } catch ({response}) {
      const {message, data} = response.data;
      this.errors = data.errors;
      return {ok: false, data, message }
    } finally {
      this.loading = false
    }
  }
}

interface ResponseOk {
  ok: boolean;
  message?: string;
}
interface Errors {
  [key: string]: string[];
}

interface ResponseError {
  ok: boolean;
  message?: string;
  data: {
    errors: Errors;
  };
}
