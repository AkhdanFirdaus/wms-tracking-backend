import { MongoClient } from "npm:mongodb@6.10.0";

const MONGODB_URI = Deno.env.get("MONGODB_URI");
const DB_NAME = Deno.env.get("DB_NAME");

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not set");
  Deno.exit(1);
}

const client = new MongoClient(MONGODB_URI);

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB: ", error);
  Deno.exit(1);
}

export const db = client.db(DB_NAME);
export const activities = db.collection("activities");
export const inventories = db.collection("inventories");
export const raw_items = db.collection("raw_items");
export const suppliers = db.collection("suppliers");
export const supply_details = db.collection("supply_details");
export const warehouses = db.collection("warehouses");
