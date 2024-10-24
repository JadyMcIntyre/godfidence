// Define the port for the server to listen on and for MongoDB
const API_PORT = Number(Deno.env.get("PORT"));
const DB_PORT = Number(Deno.env.get("DB_PORT"));

Deno.serve({port: API_PORT}, (req) => new Response("Hello, World!"));