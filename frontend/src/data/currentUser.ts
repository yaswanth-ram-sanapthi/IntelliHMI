import type { UserRole } from "../types/role";

export interface CurrentUser {
  id: string;
  employeeId: string;

  name: string;
  email: string;

  role: UserRole;

  department: string;

  avatar?: string;

  isOnline: boolean;
}
export const currentUser: CurrentUser = {
  id: "USR-001",

  employeeId: "EMP-1001",

  name: "Yaswanth",

  email: "yaswanth@intellihmi.com",

role: "operator",

  department: "Software Development",

  avatar: "",

  isOnline: true,
};