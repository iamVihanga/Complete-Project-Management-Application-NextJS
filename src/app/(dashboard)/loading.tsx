import { Loader } from "lucide-react";
import React from "react";

type Props = {};

export default function LoadingPage({}: Props) {
  return (
    <div className="h-screen flex items-center justify-center">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
}
