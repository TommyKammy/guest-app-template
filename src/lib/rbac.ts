export const roleRank = {
  owner: 4,
  admin: 3,
  member: 2,
  viewer: 1
} as const;

export type Role = keyof typeof roleRank;

export function hasRole(required: Role, actual: Role) {
  return roleRank[actual] >= roleRank[required];
}
