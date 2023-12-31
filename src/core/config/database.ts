
import mongoose from "mongoose";
import config from "./config";

// database connection.
const initializeDbConnection = async () => {
  await mongoose.connect(config.db.mongodb.MONGO_URL);
}

export {
  initializeDbConnection,
  mongoose
}