import { openIDB } from "./open-idb";
import { Store } from "./store";
import { DBReq } from "./types";

export class Dexlily {
  req: DBReq;

  constructor(
    public name: string,
    public version: number,
    upgrade: () => void
  ) {
    this.req = openIDB(name, version, upgrade);
  }

  store(storeName: string) {
    return new Store(this.req, storeName);
  }

  destroy() {
    indexedDB.deleteDatabase(name);
  }
}
