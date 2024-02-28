import {sqliteTable, text, integer, real} from "drizzle-orm/sqlite-core"
import {InferSelectModel} from "drizzle-orm";
import {v4 as uuid} from "uuid";

export const debts = sqliteTable("debt", {
  id: text("id").primaryKey().$defaultFn(() => uuid()),
  name: text("name").notNull(),
  amount: real("amount").notNull(),
});

export type Debt = InferSelectModel<typeof debts>

export const installments = sqliteTable("installment", {
  id: text("id").primaryKey().$defaultFn(() => uuid()),
  debtId: text("debtId").notNull().references(() => debts.id, {onDelete: "cascade"}),
  amount: real("amount").notNull(),
  isPaid: integer("isPaid", {mode: "boolean"}).notNull().default(false),
  date: integer("date", {mode: "timestamp"}).notNull(),
  paidDate: integer("paidDate", {mode: "timestamp"}),
});

export type Installment = InferSelectModel<typeof installments>

export const schema = {
  debts,
  installments,
}
