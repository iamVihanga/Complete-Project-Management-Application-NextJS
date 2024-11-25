import { getCurrent } from "@/features/auth/actions";
import { SignUpForm } from "@/features/auth/components/sign-up-form";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const user = await getCurrent();

  if (user) return redirect("/");

  return <SignUpForm />;
}
