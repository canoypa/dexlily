import { KeyPath } from "./types";

type keyPathCreator = {
  <T extends string>(name: T, path?: undefined): KeyPath<T, T>;
  <N extends string, T extends string>(name: N, path: T): KeyPath<N, T>;
};

export const keyPath: keyPathCreator = (name: string, path?: string) => ({
  keyPath: { [name]: path || name },
});
