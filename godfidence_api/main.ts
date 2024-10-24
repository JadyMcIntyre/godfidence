// Define the port for the server to listen on and for MongoDB
const PORT = Number(Deno.env.get("PORT"));
const DB_PORT = Number(Deno.env.get("DB_PORT"));