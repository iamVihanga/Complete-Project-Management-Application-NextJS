import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Props = {
  image?: string;
  name: string;
  className?: string;
};

export function WorkspaceAvatar({ name, className, image }: Props) {
  if (image) {
    return (
      <div
        className={cn("size-10 relative rounded-md overflow-hidden", className)}
      >
        <Image alt={name} src={image} fill className="object-cover" />
      </div>
    );
  }

  return (
    <Avatar className={cn("size-10 rounded-md", className)}>
      <AvatarFallback className="text-white bg-blue-600 rounded-md font-semibold text-lg uppercase">
        {name[0]}
      </AvatarFallback>
    </Avatar>
  );
}
