import {Debt, db} from "@/core/database";

export  async function listAllDebts(): Promise<Debt[]> {
  return db.query.debts.findMany();
}
