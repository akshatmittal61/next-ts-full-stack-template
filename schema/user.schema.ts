import { USER_ROLE } from "@/constants";
import { Schema, User } from "@/types";

export const UserSchema: Schema<User> = {
	name: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		index: {
			unique: true,
			sparse: true,
		},
	},
	role: {
		type: String,
		enum: Object.values(USER_ROLE),
		default: USER_ROLE.MEMBER,
	},
};
