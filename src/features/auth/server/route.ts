import { Hono } from "hono";
import { AppwriteException, ID } from "node-appwrite";
import { zValidator } from "@hono/zod-validator";
import { deleteCookie, setCookie } from "hono/cookie";

import { createAdminClient } from "@/lib/appwrite";

import { signInSchema } from "@/features/auth/schemas/sign-in.schema";
import { signUpSchema } from "@/features/auth/schemas/sign-up.schema";
import { AUTH_COOKIE } from "../constants";
import { sessionMiddleware } from "@/lib/session-middleware";

const app = new Hono()
  /**
   * Get current authentication user Handler
   */
  .get("/current", sessionMiddleware, (c) => {
    const user = c.get("user");

    return c.json({ data: user });
  })

  /**
   * Login API Handler
   */
  .post("/login", zValidator("json", signInSchema), async (c) => {
    try {
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

      return c.json(
        { data: { email, password }, error: null, success: true },
        200
      );
    } catch (error) {
      if (error instanceof AppwriteException) {
        return c.json(
          {
            data: null,
            error: error.message,
            success: false,
          },
          500
        );
      }

      return c.json(
        {
          data: null,
          error: "An unexpected error occurred",
          success: false,
        },
        500
      );
    }
  })

  /**
   * Register API Handler
   */
  .post("/register", zValidator("json", signUpSchema), async (c) => {
    try {
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

      return c.json({ success: true, data: user, error: null }, 200);
    } catch (error) {
      if (error instanceof AppwriteException) {
        return c.json(
          {
            success: false,
            data: null,
            error: error.message,
          },
          500
        );
      }

      return c.json(
        {
          success: false,
          data: null,
          error: "An unexpected error occurred",
        },
        500
      );
    }
  })

  /**
   * Register API Handler
   */
  .post("/logout", sessionMiddleware, async (c) => {
    try {
      const account = c.get("account");

      // Session Cookie handelling (with hono/cookie)
      deleteCookie(c, AUTH_COOKIE);
      await account.deleteSession("current");

      return c.json({ success: true, error: null });
    } catch (error) {
      if (error instanceof AppwriteException) {
        return c.json(
          {
            success: false,
            error: error.message,
          },
          500
        );
      }

      return c.json(
        {
          success: false,
          error: "An unexpected error occurred",
        },
        500
      );
    }
  });

export default app;
