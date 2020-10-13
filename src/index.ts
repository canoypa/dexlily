import { openIDB } from "./open-idb";
import { Store } from "./store";
import { DBReq } from "./types";
import { UpgradeDataBase } from "./upgrade-db";

export type UpgradeFn = (db: UpgradeDataBase) => void;

export class Dexlily {
  private req: DBReq;

  constructor(
    public name: string,
    public version: number,
    upgradeFn: UpgradeFn
  ) {
    this.req = openIDB(name, version, upgradeFn);
  }

  store(storeName: string) {
    return new Store(this.req, storeName);
  }

  destroy() {
    indexedDB.deleteDatabase(this.name);
  }
}
