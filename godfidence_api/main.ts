import { userRoutes } from "./features/user/routes.ts";
import { mongoose } from "./config/mongo_db.ts";

const API_PORT = Number(Deno.env.get("PORT"));
const DB_PORT = Number(Deno.env.get("DB_PORT"));
const DB_Location = String(Deno.env.get("USE_ATLAS")) === "true"
    ? "running on Atlas"
    : `running locally on http://localhost:${DB_PORT}`;

mongoose.connection.once("open", () => {
    Deno.serve({
        port: DB_PORT,
        onListen({ port, hostname }) {
            console.log(
                `Database is running on: \n http://${hostname}:${port}, \n ${DB_Location} \n`,
            );
        },
    }, () => {
        return new Response("body", { status: 200 });
    });
});

// Handle database connection errors
mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

Deno.serve({
    port: API_PORT,
    onListen({ port, hostname }) {
        console.log(`API is running on: \n http://${hostname}:${port} \n`);
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
