export default function email(value: string): string|boolean {
  return /\S+@\S+\.\S+/.test(value) ? true : 'Not valid email';
}