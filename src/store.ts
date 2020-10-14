export class Store {
  constructor(private db: IDBDatabase, private storeName: string) {}

  public async get(key: IDBValidKey) {
    const store = await getStore(this.db, this.storeName);
    const getReq = store.get(key);

    return new Promise((resolve, reject) => {
      getReq.onerror = (error) => reject(error);
      getReq.onsuccess = () => resolve(getReq.result);
    });
  }

  public async set(key: IDBValidKey, value: unknown) {
    const store = await getStore(this.db, this.storeName, "readwrite");
    const getReq = store.put(value, key);

    return new Promise((resolve, reject) => {
      getReq.onerror = (error) => reject(error);
      getReq.onsuccess = () => resolve();
    });
  }

  public async delete(key: IDBValidKey) {
    const store = await getStore(this.db, this.storeName, "readwrite");
    const getReq = store.delete(key);

    return new Promise((resolve, reject) => {
      getReq.onerror = (error) => reject(error);
      getReq.onsuccess = () => resolve();
    });
  }
}
