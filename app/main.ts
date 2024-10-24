// currently very basic oak api
import { Application } from "https://deno.land/x/oak@v17.1.1/mod.ts";
import { indexRoutes } from "./features/index/routes.ts";

const API_PORT = Number(Deno.env.get("API_PORT"));

const app = new Application();

app.use(indexRoutes().routes()); // Call indexRoutes and get routes
app.use(indexRoutes().allowedMethods()); // Include allowedMethods

await app.listen({ port: API_PORT });
