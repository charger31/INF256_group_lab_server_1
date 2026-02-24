import mysql from "mysql2/promise";
import config from "../../core/config/config.js";

export default mysql.createPool({
  host: config.database.host,
  user: config.database.username,
  password: config.database.password,
  database: config.database.schema,
  waitForConnections: true,
  connectionLimit: 1,
  queueLimit: 0,
});
