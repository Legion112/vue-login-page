export type VForm = Vue & { validate: () => boolean };
export type Validator = (v: string) => boolean|string;