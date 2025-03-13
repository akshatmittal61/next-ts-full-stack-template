import { T_API_METHODS } from "@/types";
import { getEnumeration } from "@/utils";

export const apiMethods = getEnumeration<T_API_METHODS>([
	"GET",
	"POST",
	"PUT",
	"PATCH",
	"DELETE",
]);

const message = Object.freeze({
	SUCCESS: "Success",
	ERROR: "Error",
	NOT_FOUND: "Not Found",
	BAD_REQUEST: "Bad Request",
	UNAUTHORIZED: "Unauthorized",
	FORBIDDEN: "Forbidden",
	INTERNAL_SERVER_ERROR: "Internal Server Error",
	SERVICE_UNAVAILABLE: "Service Unavailable",
});

const status = Object.freeze({
	SUCCESS: 200,
	CREATED: 201,
	REMOVED: 204,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_ALLOWED: 405,
	GONE: 410,
	CONFLICT: 409,
	INTERNAL_SERVER_ERROR: 500,
	SERVICE_UNAVAILABLE: 503,
});

export const HTTP = Object.freeze({ message, status });
