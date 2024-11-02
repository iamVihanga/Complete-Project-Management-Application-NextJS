import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { signInSchema } from "@/features/auth/schemas/sign-in.schema";
import { signUpSchema } from "@/features/auth/schemas/sign-up.schema";

const app = new Hono()
  .post("/login", zValidator("json", signInSchema), async (c) => {
    const { email, password } = c.req.valid("json");

    console.log({ email, password });

    return c.json({ email, password });
  })
  .post("/register", zValidator("json", signUpSchema), async (c) => {
    const { email, name, password } = c.req.valid("json");

    console.log({ email, name, password });

    return c.json({ email, name, password });
  });

export default app;
