import { userRoutes } from "./features/user/routes.ts";

// Define the port for the server to listen on and for MongoDB
const API_PORT = Number(Deno.env.get("PORT"));
const DB_PORT = Number(Deno.env.get("DB_PORT"));

Deno.serve({
    port: API_PORT,
    onListen({ port, hostname }) {
        console.log(`Server is running on http://${hostname}:${port}`);
    },
}, (req) => {
    const url = new URL(req.url);

    // Handle user routes
    if (url.pathname.startsWith("/users")) {
        return userRoutes(url);
    }

    // Default route
    return new Response("Welcome to the API", {
        headers: { "Content-Type": "text/plain" },
    });
});
