import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";
import { ATLAS_URI } from "../config.js";

async function connect() {
  const mongod = await MongoMemoryServer.create();
  // const getUri = mongod.getUri();

  mongoose.set("strictQuery", true);
  // const db = await mongoose.connect(getUri);
  const db = await mongoose.connect(ATLAS_URI);
  console.log("Database Connected");
  return db;
}

export default connect;
