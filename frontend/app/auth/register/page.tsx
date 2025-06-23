import { RegisterForm } from "@/components/register-form";
import { GalleryVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVertical className="size-4" />
            </div>
            EatHealthy
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/register-img.jpg"
          fill
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.7] dark:grayscale-50"
        />
      </div>
    </div>
  );
}
