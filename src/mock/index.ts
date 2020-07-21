import {Response, Server} from 'miragejs';

new Server({
  routes() {
    this.namespace = 'api';
    this.post('/authentication/register', (schema, request) => {
      console.log(schema, request);
      return new Response(422, {}, {
        message: 'Validation error',
        data: {
          errors: {
            email: ['Cannot be empty']
          }
        }
      })
    }, { timing: 4000 });
  }
})
