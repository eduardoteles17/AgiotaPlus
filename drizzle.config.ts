import {defineConfig } from 'drizzle-kit';


export default defineConfig({
  schema: './src/core/database/schema.ts',
  out: './src/drizzle',
  driver: 'expo',
})
