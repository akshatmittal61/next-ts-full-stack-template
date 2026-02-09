import { User } from "./schema";

export type IUser = Omit<User, "createdAt" | "updatedAt">;
