import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export default async function WorkspaceIdPage({}: Props) {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <div>WorkspaceIdPage</div>;
}
