export function randomElement<T>(array: T[]): T {
  if (!Array.isArray(array) || array.length < 1) {
    return null;
  }
  return array[Math.floor(Math.random() * array.length)];
}

export function shuffle<T>(array: T[]): T[] {
  return array.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}