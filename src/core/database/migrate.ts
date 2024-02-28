import {migrate as drizzleMigrate} from "drizzle-orm/expo-sqlite/migrator"
import {db} from "./database";
import migrations from "@/drizzle/migrations";

export async function migrate() {
  await drizzleMigrate(db, migrations);
}