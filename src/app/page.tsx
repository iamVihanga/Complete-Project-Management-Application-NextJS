import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="">
      <div className="flex gap-4 bg-slate-100 p-3">
        <Button variant={"primary"}>Primary</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"destructive"}>Destructive</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"link"}>Link</Button>
        <Button variant={"muted"}>Muted</Button>
        <Button variant={"outline"}>Outline</Button>
        <Button variant={"teritary"}>Teritary</Button>
      </div>

      <div className="mt-3">
        <Input />
      </div>
    </div>
  );
}