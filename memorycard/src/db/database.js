import { openDatabaseAsync } from 'expo-sqlite';

let db;

export const initDB = async () => {
  db = await openDatabaseAsync('tokenDB');

  await db.execAsync(
    'CREATE TABLE IF NOT EXISTS tokenTable (id INTEGER PRIMARY KEY AUTOINCREMENT, token TEXT);'
  );
  // await db.execAsync(`DROP TABLE IF EXISTS cartTable;`);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS cartTable (
      id TEXT PRIMARY KEY,
      username TEXT,
      createdAt TEXT
    );
  `);
  
};

export const getDatabase = async () => {
  if (!db) {
    return await initDB();
  }
  return db;
};