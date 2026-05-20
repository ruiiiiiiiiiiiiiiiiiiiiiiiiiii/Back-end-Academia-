import mysql from "mysql2/promise";

const connection = await mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "academia",
    port: 3306
});

export default { connection };