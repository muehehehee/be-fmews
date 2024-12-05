import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

/*
db berfungsi untuk melakukan setup koneksi ke database
terhubung dengan config dotenv
*/

const connection = mysql.createConnection({
  host: "btiwlyekj4vswxlkaoh9-mysql.services.clever-cloud.com",
  user: "uwxvgjua2hy6nfsg",
  password: "XYlKvAke1MTkKlejFnWG",
  database: "btiwlyekj4vswxlkaoh9",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
  console.log("Connected to the database");
});

export default connection;
