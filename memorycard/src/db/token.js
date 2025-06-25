import { getDatabase } from './database';

export const storeToken = async (token) => {
  const db = await getDatabase();
  await db.runAsync('INSERT INTO tokenTable (token) VALUES (?);', token);
};

export const getToken = async () => {
  const db = await getDatabase();
  
  const result = await db.getFirstAsync(
    'SELECT token FROM tokenTable ORDER BY id DESC LIMIT 1;'
  );

  return result ? result.token : null;
};

export const removeToken = async () => {
  const db = await getDatabase();
  await db.runAsync('DELETE FROM tokenTable;');
};