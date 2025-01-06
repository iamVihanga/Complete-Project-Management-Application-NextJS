import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type InferRequestType, type InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";
import { useId } from "react";

type ResponseType = InferResponseType<(typeof client.api.workspaces)["$post"]>;

type RequestType = InferRequestType<(typeof client.api.workspaces)["$post"]>;

export const useCreateWorkspace = () => {
  const queryClient = useQueryClient();
  const toastId = useId();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ form }) => {
      toast.loading("Creating Workspace...", { id: toastId });

      const response = await client.api.workspaces.$post({ form });

      if (!response.ok) {
        throw new Error("Failed to create workspace");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("Workspace created", { id: toastId });
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create workspace", {
        id: toastId,
      });
    },
  });

  return mutation;
};
