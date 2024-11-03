import { Hono } from "hono";
import { ID } from "node-appwrite";
import { zValidator } from "@hono/zod-validator";
import { deleteCookie, setCookie } from "hono/cookie";

import { createAdminClient } from "@/lib/appwrite";

import { signInSchema } from "@/features/auth/schemas/sign-in.schema";
import { signUpSchema } from "@/features/auth/schemas/sign-up.schema";
import { AUTH_COOKIE } from "../constants";

const app = new Hono()
  /**
   * Login API Handler
   */
  .post("/login", zValidator("json", signInSchema), async (c) => {
    const { email, password } = c.req.valid("json");

    // Appwrite login methology
    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(email, password);

    // Session Cookie handelling (with hono/cookie)
    setCookie(c, AUTH_COOKIE, session.secret, {
      path: "/",
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
    });

    return c.json({ email, password });
  })

  /**
   * Register API Handler
   */
  .post("/register", zValidator("json", signUpSchema), async (c) => {
    const { email, name, password } = c.req.valid("json");

    // Appwrite signup methology
    const { account } = await createAdminClient();

    const user = await account.create(ID.unique(), email, password, name);

    /**
     * This is not essential for signup process.
     * But, if you want to login the user after signup, you can use this code.
     */
    const session = await account.createEmailPasswordSession(email, password);

    // Session Cookie handelling (with hono/cookie)
    setCookie(c, AUTH_COOKIE, session.secret, {
      path: "/",
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
    });

    return c.json({ success: true, data: user });
  })

  /**
   * Register API Handler
   */
  .post("/logout", (c) => {
    // Session Cookie handelling (with hono/cookie)
    deleteCookie(c, AUTH_COOKIE);

    return c.json({ success: true });
  });

export default app;
