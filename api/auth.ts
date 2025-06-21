import { http } from "@/connections";
import { ApiRes, ApiResponses } from "@/types";

export class AuthApi {
	public static async verify(headers?: any) {
		const res = await http.get<ApiRes<ApiResponses.VerifyUser>>(
			"/auth/verify",
			{ headers }
		);
		return res.data;
	}
	public static async logout(headers?: any) {
		const response = await http.get<ApiRes<ApiResponses.Logout>>(
			"/auth/logout",
			{ headers }
		);
		return response.data;
	}
}
