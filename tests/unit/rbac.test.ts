import { describe, expect, it } from "vitest";
import { hasRole } from "@/lib/rbac";

describe("hasRole", () => {
  it("returns true when actual role is higher", () => {
    expect(hasRole("member", "admin")).toBe(true);
  });

  it("returns false when actual role is lower", () => {
    expect(hasRole("owner", "viewer")).toBe(false);
  });
});
