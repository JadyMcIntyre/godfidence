// Import Mongoose
import mongoose from "npm:mongoose@^6.7";

const uri = String(Deno.env.get("USE_ATLAS")) === "true"
    ? String(Deno.env.get("MONGODB_URI_ATLAS"))
    : String(Deno.env.get("MONGODB_URI_LOCAL"));

/**
 * Connect to MongoDB using Mongoose.
 *
 * Uses the provided URI and connects with options to avoid deprecation warnings.
 */
mongoose.connect(uri)
    .then(() => console.log("response from { mongo_db.ts }: \n Connected to MongoDB."))
    .catch((err) => console.error("Connection error", err));

export { mongoose };
