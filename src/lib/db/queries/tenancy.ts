import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { memberships } from "@/lib/db/schema";

export async function getMembership(userId: string, tenantId: string) {
  const row = await db.query.memberships.findFirst({
    where: and(eq(memberships.userId, userId), eq(memberships.tenantId, tenantId))
  });
  return row ?? null;
}
