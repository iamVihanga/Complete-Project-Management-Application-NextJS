import { Navbar } from "@/components/global/navbar";
import { Sidebar } from "@/components/global/sidebar";
import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";
import React, { Suspense } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Suspense>
      <div className="min-h-screen">
        <CreateWorkspaceModal />
        <div className="flex w-full h-full">
          <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
            <Sidebar />
          </div>

          <div className="lg:pl-[264px] w-full">
            <div className="mx-auto max-w-screen-2xl h-full">
              <Navbar />

              <main className="h-full py-8 px-6 flex flex-col">{children}</main>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
