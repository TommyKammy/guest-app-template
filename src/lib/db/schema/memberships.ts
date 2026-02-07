import { pgEnum, pgTable, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { tenants } from "@/lib/db/schema/tenants";
import { users } from "@/lib/db/schema/users";

export const membershipRole = pgEnum("membership_role", ["owner", "admin", "member", "viewer"]);

export const memberships = pgTable(
  "memberships",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    role: membershipRole("role").notNull().default("member"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull()
  },
  (table) => ({
    userTenantUnique: unique("memberships_user_tenant_unique").on(table.userId, table.tenantId)
  })
);
