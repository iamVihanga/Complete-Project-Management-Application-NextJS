import { UserButton } from "@/features/auth/components/user-button";
import MobileSidebar from "./mobile-sidebar";

type Props = {};

export function Navbar({}: Props) {
  return (
    <nav className="pt-4 px-6 w-full flex items-center justify-between">
      <div className="hidden lg:flex flex-col">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="text-muted-foreground">
          Monitor all of your projects and tasks here
        </p>
      </div>

      <MobileSidebar />
      <UserButton />
    </nav>
  );
}
