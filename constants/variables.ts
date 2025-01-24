import { service, url } from "@/config";

export const frontendBaseUrl: string = url.frontend;
export const backendBaseUrl: string = url.backend;
export const logsBaseUrl: string = "logs";
export const serviceName = service;
export const nodeEnv: "development" | "production" | "test" =
	process.env.NODE_ENV || process.env.NEXT_PUBLIC_NODE_ENV || "production";
