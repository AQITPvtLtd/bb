import pool from "@/helper/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const results = await new Promise((resolve, reject) => {
      // Perform the database query

      pool.query("SELECT * FROM blog", (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });

    return NextResponse.json({
      message: "Success",
      success: true,
      results: results,
    });
  } catch (error) {
    console.log(error.message);
    pool.end();
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
