# Dexlily

Meccha simply IndexedDB library.

# Usage

```ts
// Setup
const upgradeFn = ^^; // Upgrade Function
const dexlily = new Dexlily("MyDataBase", 1, upgradeFn);


// Store access
const store = dexlily.store("MyData")

store.set("name", "Cano"); // I'm Cano!
store.get("name"); // Oh, it's my name. Cano.
store.remove("name"); // Ah! I've lost my name.


dexlily.destroy(); // Destroy DB
```
