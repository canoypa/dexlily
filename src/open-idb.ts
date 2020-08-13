export const openIDB = (name: string, version: number, upgrade: () => void) => {
  const req = indexedDB.open(name, version);
  req.onupgradeneeded = () => upgrade();

  return new Promise<IDBDatabase>((resolve, reject) => {
    req.onerror = (error) => reject(error);
    req.onsuccess = () => resolve(req.result);
  });
};
