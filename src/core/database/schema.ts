import {numeric, sqliteTable, text, integer} from "drizzle-orm/sqlite-core"
import {InferSelectModel} from "drizzle-orm";

export const debts = sqliteTable("debt", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  amount: numeric("amount").notNull(),
});

export type Debt = InferSelectModel<typeof debts>

export const installments = sqliteTable("installment", {
  id: text("id").primaryKey(),
  debtId: text("debtId").notNull().references(() => debts.id, {onDelete: "cascade"}),
  amount: numeric("amount").notNull(),
  isPaid: integer("isPaid").notNull().default(0),
  date: text("date").notNull(),
  paidDate: text("paidDate"),
});

export type Installment = InferSelectModel<typeof installments>

export const schema = {
  debts,
  installments,
}
