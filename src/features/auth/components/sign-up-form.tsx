import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  signUpSchema,
  type SignUpSchemaT,
} from "@/features/auth/schemas/sign-up.schema";
import Link from "next/link";

export function SignUpForm() {
  const form = useForm<SignUpSchemaT>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignUpSchemaT) => {
    console.log(values);
  };

  return (
    <Card className="w-full h-full md:w-[487px] shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-xl">Get Started!</CardTitle>
      </CardHeader>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button size={"lg"} disabled={false} className="w-full">
              Sign Up
            </Button>
          </form>
        </Form>
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

        <CardDescription className=" text-center">
          Already have an account?{" "}
          <Link href={"/sign-in"}>
            <span className="text-blue-700 hover:underline">Sign In</span>
          </Link>
        </CardDescription>
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
