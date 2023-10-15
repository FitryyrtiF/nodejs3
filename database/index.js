import pg from "pg";
import productModel from "../model/productModel.js";
const { Pool } = pg;

// write down details for database
const pool = new Pool({
  host: "db.zknsfidjctagtaptwosp.supabase.co",
  user: "postgres",
  database: "postgres",
  password: "UGXjbPIryX5G74xf",
  port: "5432",
});

// dbInit
export const dbInit = async () => {
  try {
    const data = await pool.query("SELECT NOW()"); //dummy testing
    console.log("database is CONNECTED", data.rows[0].now);

    // table
    await productModel();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// query - Execute SQL query
export const query = async (text, params) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log("EXECUTED query", { text, duration, rows: res.rowCount });
  return res;
};
