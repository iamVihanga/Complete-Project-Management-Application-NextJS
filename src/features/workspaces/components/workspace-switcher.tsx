"use client";

import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

import { useGetWorkspaces } from "../api/use-get-workspaces";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WorkspaceAvatar } from "./workspace-avatar";
import { useWorkspaceId } from "../hooks/use-workspace-id";
import { useCreateWorkspaceModal } from "../hooks/use-create-workspace-modal";

export function WorkspaceSwitcher() {
  const { data: workspaces } = useGetWorkspaces();
  const { open } = useCreateWorkspaceModal();
  const workspaceId = useWorkspaceId();
  const router = useRouter();

  const onSelect = (id: string) => {
    router.push(`/workspaces/${id}`);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Workspaces</p>
        <PlusCircle
          onClick={open}
          className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
          strokeWidth={1}
        />
      </div>
      <Select onValueChange={onSelect} value={workspaceId}>
        <SelectTrigger className="w-full bg-neutral-100 font-medium p-1 focus:ring-transparent">
          <SelectValue placeholder="No workspace selected" />
        </SelectTrigger>
        <SelectContent>
          {workspaces?.documents.map((workspace) => (
            <SelectItem
              key={workspace.$id}
              value={workspace.$id}
              className="cursor-pointer"
            >
              <div className="flex justify-start items-center gap-3 font-medium">
                <WorkspaceAvatar
                  name={workspace.name}
                  image={workspace.imageUrl}
                />
                <span className="truncate">{workspace.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
