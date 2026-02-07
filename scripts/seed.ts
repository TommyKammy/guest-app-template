import { db } from "../src/lib/db/client";
import { memberships, tenants, users } from "../src/lib/db/schema";

async function main() {
  const [tenant] = await db
    .insert(tenants)
    .values({ slug: "demo", name: "Demo Tenant" })
    .returning({ id: tenants.id });

  const [user] = await db
    .insert(users)
    .values({ email: "owner@example.com", name: "Demo Owner" })
    .returning({ id: users.id });

  if (tenant?.id && user?.id) {
    await db.insert(memberships).values({ tenantId: tenant.id, userId: user.id, role: "owner" });
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
