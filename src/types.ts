import { openIDB } from "./open-idb";

export type DBReq = ReturnType<typeof openIDB>;

export type KeyPath<N extends string, T extends string> = Record<
  "keyPath",
  Record<N, T>
>;
