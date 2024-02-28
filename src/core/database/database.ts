import {openDatabaseSync} from "expo-sqlite/next"

import { drizzle } from "drizzle-orm/expo-sqlite";

export const expoDb = openDatabaseSync("app.db")

export const db = drizzle(expoDb)

