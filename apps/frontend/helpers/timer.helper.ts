export const delay = (timeInMillis: number) => {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), timeInMillis));
}
