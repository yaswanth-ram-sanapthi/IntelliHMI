export type Permission =
  | "machine:view"
  | "machine:start"
  | "machine:stop"
  | "telemetry:view"
  | "alarm:view"
  | "users:view"
  | "users:create"
  | "users:update"
  | "users:delete"
  | "roles:manage";