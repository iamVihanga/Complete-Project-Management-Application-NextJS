import Image from "next/image";
import Link from "next/link";

export function Sidebar({}) {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src={"/assets/logo.svg"} alt="" width={164} height={48} />
      </Link>
    </aside>
  );
}
