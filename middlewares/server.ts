import { HTTP } from "@/constants";
import { Logger } from "@/log";
import { ApiController, ApiRequest, ApiResponse } from "@/types";
import { ApiError, genericParse, getNonEmptyString } from "@/utils";

export class ServerMiddleware {
	public static async authenticatedRoute(next: ApiController) {
		return (req: ApiRequest, res: ApiResponse) => {
			try {
				const token = genericParse(
					getNonEmptyString,
					req.cookies.token
				);
				if (!token) {
					throw new Error("No token provided");
				}
				return next(req, res);
			} catch (error) {
				Logger.error(error);
				return ApiError(res).send(
					HTTP.message.UNAUTHORIZED,
					HTTP.status.UNAUTHORIZED
				);
			}
		};
	}
	public static async adminRoute(next: ApiController) {
		return (req: ApiRequest, res: ApiResponse) => {
			try {
				const role = genericParse(getNonEmptyString, req.cookies.role);
				if (role !== "admin") {
					throw new Error("Not an admin");
				}
				return next(req, res);
			} catch (error) {
				Logger.error(error);
				return ApiError(res).send(
					HTTP.message.FORBIDDEN,
					HTTP.status.FORBIDDEN
				);
			}
		};
	}
}
