import React from "react";

import { QueryProvider } from "@/components/providers/query-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <div>
      <QueryProvider>{children}</QueryProvider>
    </div>
  );
}
