import { getCurrent } from "@/features/auth/actions";
import { SignInForm } from "@/features/auth/components/sign-in-form";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const user = await getCurrent();

  if (user) return redirect("/");

  return <SignInForm />;
}
