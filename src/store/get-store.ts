const getStore = async (
  database: IDBDatabase,
  storeName: string,
  openMode: IDBTransactionMode = "readonly"
) => {
  const transaction = database.transaction(storeName, openMode);
  return transaction.objectStore(storeName);
};
