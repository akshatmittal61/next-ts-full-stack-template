import { DatabaseManager } from "@/connections";

export interface DatabaseManagerConfig {
	uri: string;
}

export interface DbContainer {
	db: DatabaseManager;
}
