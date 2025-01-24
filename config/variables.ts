type T_URL = "frontend" | "backend";
type T_NODE_ENV = "development" | "production" | "test";

export const url: Record<T_URL, string> = {
	frontend:
		process.env.NEXT_PUBLIC_FRONTEND_BASE_URL || "http://localhost:3000",
	backend:
		process.env.NEXT_PUBLIC_BACKEND_BASE_URL ||
		"http://localhost:3000/api/v1",
};

export const nodeEnv: T_NODE_ENV =
	process.env.NODE_ENV || process.env.NEXT_PUBLIC_NODE_ENV || "production";

export const service = process.env.NEXT_PUBLIC_SERVICE || "template";
