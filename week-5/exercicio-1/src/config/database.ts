import mongoose from "mongoose";
import * as dotenv from "dotenv";

const databaseUrl =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/schoolMJVProducts";

dotenv.config();
mongoose.set("strictQuery", false);

export default mongoose.connect(databaseUrl);
