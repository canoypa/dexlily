import { Store } from "./store";

export class UpgradeDataBase {
  constructor(private db: IDBDatabase) {}

  createStore = async (name: string) => {
    this.db.createObjectStore(name);
  };

  deleteStore = async (name: string) => {
    this.db.deleteObjectStore(name);
  };

  store(storeName: string) {
    return new Store(this.req, storeName);
  }
}
