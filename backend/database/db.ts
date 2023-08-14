import {database, host, password, port, user} from "./credentials";

const mysql = require("mysql2");

class DB {
    conn;
    constructor() {
        this.conn = mysql.createPool({
            host: host,
            port: port,
            user: user,
            password: password,
            database: database
        }).promise()
    }
}

export {DB}