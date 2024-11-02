import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1).max(256),
});

export type SignInSchemaT = z.infer<typeof signInSchema>;
