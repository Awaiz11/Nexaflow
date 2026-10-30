import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const previewRequests = pgTable("preview_requests", {
  id: uuid("id").defaultRandom().primaryKey(),
  businessName: varchar("business_name", { length: 160 }).notNull(),
  industry: varchar("industry", { length: 80 }).notNull(),
  discoveryUrl: text("discovery_url"),
  whatsappNumber: varchar("whatsapp_number", { length: 40 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
