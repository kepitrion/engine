import { connect } from "mongoose";

import { DatabaseError } from "./error";

export async function databaseConnect() {
  if (!process.env.DATABASE_URL) {
    throw new DatabaseError("Database URL for MongoDB server is required.");
  }

  const connection = await connect(process.env.DATABASE_URL);

  return connection;
}