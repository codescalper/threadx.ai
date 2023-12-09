"use client";
import toast, { Toaster } from "react-hot-toast";
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
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const formSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Password should be greater than 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one numeric character"
      ),
    renteredPassword: z.string().min(8, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.renteredPassword, {
    path: ["renteredPassword"],
    message: "Password do not match",
  });

export default function SignUp() {
  const router = useRouter();

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: value.email,
        password: value.password,
      }),
    });

    if (response.ok) {
      toast.success("Account created successfully");
      router.push("/sign-in");
    } else {
      console.error("Registration failed");
    }
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "", renteredPassword: "" },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-96 sm:w-96 md:w-96 lg:w-96 xl:w-96">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button
                variant="outline"
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "https://threadx.10xeng.xyz/generate",
                  })
                }
              >
                <FaGithub className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "https://threadx.10xeng.xyz/generate",
                  })
                }
              >
                <FaGoogle className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="xyz@example.com"
                {...form.register("email")}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...form.register("password")}
              />
              {form.formState.errors.password && ( // Check if there's an error for the 'password' field
                <p className="text-red-500 text-xs">
                  {form.formState.errors.password.message}
                </p>
              )}
              <Label htmlFor="renteredPassword">Re-enter your Password</Label>
              <Input
                id="reenteredPassword"
                type="password"
                placeholder="Re-enter your Password"
                {...form.register("renteredPassword")}
              />
              {form.formState.errors.renteredPassword && (
                <p className="text-red-500 text-xs">
                  {form.formState.errors.renteredPassword.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Create account
            </Button>
          </CardFooter>
          <p className="text-center text-sm mt-2">
            Already have an account?, please&nbsp;
            <Link className="text-orange-500 hover:underline" href="/sign-in">
              Sign in
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}
