import migrations from '@agiota-plus/drizzle/migrations';
import { migrate as drizzleMigrate } from 'drizzle-orm/expo-sqlite/migrator';

import { db } from './database';

export async function migrate() {
  await drizzleMigrate(db, migrations);
}
