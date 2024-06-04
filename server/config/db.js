import mysql from "mysql2";

const db = mysql.createConnection({
  host: "database-1.cjcauwkeiru9.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "12345678",
  database: "new_schema",
});

export default db;
