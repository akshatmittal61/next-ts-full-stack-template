type T_URL = "frontend" | "backend";

export const url: Record<T_URL, string> = {
	frontend:
		process.env.NEXT_PUBLIC_FRONTEND_BASE_URL || "http://localhost:3000",
	backend:
		process.env.NEXT_PUBLIC_BACKEND_BASE_URL ||
		"http://localhost:3000/api/v1",
};
