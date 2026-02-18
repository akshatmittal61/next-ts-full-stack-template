import { AuthMapping, User } from "./schema";

// Types prefixed with `I` are client-specific models

export type IUser = User;
export type IAuthMapping = Omit<AuthMapping, "user"> & { user: IUser | null };
