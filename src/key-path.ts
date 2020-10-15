export const keyPath = (name: string, path?: string) => ({
  keyPath: { [name]: path || name },
});
