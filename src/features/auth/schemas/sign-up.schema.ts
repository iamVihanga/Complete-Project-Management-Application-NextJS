import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(1, "Required").trim(),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type SignUpSchemaT = z.infer<typeof signUpSchema>;
