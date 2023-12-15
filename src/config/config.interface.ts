export interface DatabaseConfig {
  host: string;
  port: number;
}

export interface AppConfig {
  port: number;
  database: DatabaseConfig;
}
