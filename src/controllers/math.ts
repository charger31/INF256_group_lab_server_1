import pool from "./utils/database.js";
import type {Evaluation } from "../types/math.js";
import type { ResultSetHeader, RowDataPacket } from "mysql2";

export const registerEvaluation = async (evalInfo: Evaluation) => {
  const data = await pool.execute<ResultSetHeader>(
    `INSERT INTO evaluation(value1,value2,operation) VALUES(?,?,?)`,
    [evalInfo.value1, evalInfo.value2, evalInfo.operation],
  );

  if (data[0].affectedRows > 0) {
    return true;
  }

  return false;
};

export const getEvaluations = async () => {
  const query = `SELECT value1, value2, operation FROM evaluation`;

  const data = await pool.execute<(Evaluation & RowDataPacket)[]>(query);

  return data[0];
};