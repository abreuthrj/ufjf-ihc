import { IUser } from "../@types/user";

const UsersMock: IUser[] = [
  {
    id: "015a4ffa-3b1a-4176-8a2f-1cca1ac2d384",
    email: "user@gmail.com",
    password: "user123",
    role: "user",
  },
  {
    id: "59d65ef5-8e02-4fc3-af1e-715b3ae88476",
    email: "admin@gmail.com",
    password: "admin123",
    role: "admin",
  },
];

export default UsersMock;
