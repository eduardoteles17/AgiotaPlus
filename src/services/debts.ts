import { db, Debt } from '@agiota-plus/core/database';

export async function listAllDebts(): Promise<Debt[]> {
  return db.query.debts.findMany();
}
