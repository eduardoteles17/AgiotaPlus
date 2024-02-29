import { drizzle } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite/next';

import { schema } from './schema';

export const expoDb = openDatabaseSync('app.db');

export const db = drizzle(expoDb, {
  logger: true,
  schema,
});
