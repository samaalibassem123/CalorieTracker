import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mars, Venus } from "lucide-react";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          fill the fileds below to to create your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="password">Username</Label>
          <Input id="text" type="text" required />
        </div>
        <div className="flex gap-2.5 items-center">
          <div className="grid gap-3">
            <Label htmlFor="password">Age</Label>
            <Input id="password" type="number" required />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Weight in Kg</Label>
            <Input id="password" type="number" required />
          </div>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="password">Confirm Password</Label>
          <Input id="password" type="password" required />
        </div>
        <RadioGroup
          defaultValue="male"
          className="flex items-center justify-between"
        >
          <label
            className=" cursor-pointer rounded-md flex items-center space-x-2 border p-5"
            htmlFor="male"
          >
            <RadioGroupItem value="male" id="male" />
            <Mars />
            <span>Male</span>
          </label>
          <label
            className=" cursor-pointer rounded-md flex items-center space-x-2 border p-5"
            htmlFor="female"
          >
            <RadioGroupItem value="female" id="female" />
            <Venus />
            <span>female</span>
          </label>
        </RadioGroup>
        <Button type="submit" className="w-full">
          Register
        </Button>
      </div>
      <div className="text-center text-sm">
        Don't have an account?{" "}
        <Link href="/auth/login" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  );
}
