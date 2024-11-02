import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import DottedSeparator from "@/components/global/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function SignUpForm() {
  return (
    <Card className="w-full h-full md:w-[487px] shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-xl">Get Started!</CardTitle>
      </CardHeader>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="text"
            value={""}
            onChange={() => {}}
            placeholder="Enter your name"
            disabled={false}
          />
          <Input
            required
            type="email"
            value={""}
            onChange={() => {}}
            placeholder="Enter email address"
            disabled={false}
          />
          <Input
            required
            type="password"
            value={""}
            onChange={() => {}}
            placeholder="Enter password"
            disabled={false}
            min={8}
            max={256}
          />

          <Button size={"lg"} disabled={false} className="w-full">
            Login
          </Button>
        </form>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          size={"lg"}
          disabled={false}
          className="w-full"
          variant={"secondary"}
        >
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
        <Button
          size={"lg"}
          disabled={false}
          className="w-full"
          variant={"secondary"}
        >
          <FaGithub className="mr-2 size-5" />
          Login with Github
        </Button>
      </CardContent>

      <CardFooter className="flex items-center justify-center">
        <CardDescription className="text-xs">
          By signing up, You agree to our{" "}
          <Link href={"/privacy-policy"}>
            <span className="text-blue-700 hover:underline">
              Privacy Policy
            </span>
          </Link>{" "}
          and{" "}
          <Link href={"/terms-of-service"}>
            <span className="text-blue-700 hover:underline">
              Terms of Service
            </span>
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
