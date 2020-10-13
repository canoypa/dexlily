import { UpgradeDataBase } from "./upgrade-db";

export const openIDB = (
  name: string,
  version: number,
  upgrade: (db: UpgradeDataBase) => void
) => {
  const req = indexedDB.open(name, version);
  req.onupgradeneeded = () => upgrade(new UpgradeDataBase(req.result));

  return new Promise<IDBDatabase>((resolve, reject) => {
    req.onerror = (error) => reject(error);
    req.onsuccess = () => resolve(req.result);
  });
};
