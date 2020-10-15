import { openIDB } from "./open-idb";

export type DBReq = ReturnType<typeof openIDB>;

export type KeyPath = Record<"keyPath", Record<string, string>>;
