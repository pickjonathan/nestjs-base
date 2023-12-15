export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  service_name: process.env.SERVICE_NAME,
  node_env: process.env.NODE_ENV,
  // Add other configuration properties as needed
});
