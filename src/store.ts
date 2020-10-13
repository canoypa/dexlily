export class Store {
  constructor(private db: IDBDatabase, private storeName: string) {}

  private async getStore(mode: IDBTransactionMode = "readonly") {
    const trans = this.db.transaction(this.storeName, mode);
    const store = trans.objectStore(this.storeName);
    return store;
  }

  public async get(key: IDBValidKey) {
    const store = await this.getStore();
    const getReq = store.get(key);

    return new Promise((resolve, reject) => {
      getReq.onerror = (error) => reject(error);
      getReq.onsuccess = () => resolve(getReq.result);
    });
  }

  public async set(key: IDBValidKey, value: unknown) {
    const store = await this.getStore("readwrite");
    const getReq = store.put(value, key);

    return new Promise((resolve, reject) => {
      getReq.onerror = (error) => reject(error);
      getReq.onsuccess = () => resolve();
    });
  }

  public async delete(key: IDBValidKey) {
    const store = await this.getStore("readwrite");
    const getReq = store.delete(key);

    return new Promise((resolve, reject) => {
      getReq.onerror = (error) => reject(error);
      getReq.onsuccess = () => resolve();
    });
  }
}
