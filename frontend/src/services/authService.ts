export interface User {
  employeeId: string;
  password: string;
  role: string;
  name: string;
}

const users: User[] = [
  {
    employeeId: "ADM001",
    password: "admin123",
    role: "Admin",
    name: "System Administrator",
  },
  {
    employeeId: "ENG001",
    password: "engineer123",
    role: "Engineer",
    name: "Rahul Sharma",
  },
  {
    employeeId: "OPR001",
    password: "operator123",
    role: "Operator",
    name: "Ravi Kumar",
  },
];
export const authenticateUser = (
  employeeId: string,
  password: string
): User | null => {
  const user = users.find(
    (user) =>
      user.employeeId === employeeId &&
      user.password === password
  );

  return user || null;
};