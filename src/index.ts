import { openIDB } from "./open-idb";
import { Store } from "./store";
import { UpgradeDataBase } from "./upgrade-db";

export type UpgradeFn = (db: UpgradeDataBase) => void;

export class Dexlily {
  private currentIDBDatabase: IDBDatabase | null = null;

  constructor(
    public name: string,
    public version: number,
    private upgradeFn: UpgradeFn
  ) {}

  private getCurrentIDBRequest = async () => {
    if (this.currentIDBDatabase !== null) return this.currentIDBDatabase;
    return await openIDB(this.name, this.version, this.upgradeFn);
  };

  async store(storeName: string) {
    const req = await this.getCurrentIDBRequest();
    return new Store(req, storeName);
  }

  destroy() {
    indexedDB.deleteDatabase(this.name);
  }
}
