export function randomElement<T>(array: T[]): T {
  if (!Array.isArray(array) || array.length < 1) {
    return null;
  }
  return array[Math.floor(Math.random() * array.length)];
}