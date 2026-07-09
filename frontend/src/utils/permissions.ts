import { ROLE_PERMISSIONS } from "../config/permissions";
import type { Permission } from "../types/permission";
import type { UserRole } from "../types/role";

export function hasPermission(
  role: UserRole,
  permission: Permission
): boolean {
  return ROLE_PERMISSIONS[role].includes(permission);
}