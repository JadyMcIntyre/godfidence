import { Router } from "https://deno.land/x/oak@v17.1.1/mod.ts";

const router = new Router();

export const indexRoutes = () => {
    router.get("/index", (context) => {
        context.response.body = { message: "Hello, World!" };
    });
    return router;
};
