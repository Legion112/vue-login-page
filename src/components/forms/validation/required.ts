export default function required(value: number|string|null|undefined): string|boolean {
  return (value !== '' && (typeof value === 'string' && value.trim() !== '') && value !== undefined && value !== null) ? true : 'The value cannot be blank';
}