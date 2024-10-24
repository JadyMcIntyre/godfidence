import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const API_PORT =  Number(Deno.env.get("API_PORT"));

const app = new Application();
const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello, World!";
});

app.use(router.routes());

await app.listen({ port: API_PORT});