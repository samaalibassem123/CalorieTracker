import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="p-2 ">
        <Button className=" hover:animate-none animate-pulse float-right" variant={"secondary"}>
          <Link href={"/auth/login"}>Login</Link>
        </Button>
      </header>
      <main className="flex sm:flex-row flex-col h-svh sm:items-center  p-4 sm:justify-center justify-around w-full space-y-3.5">
        <div className="sm:w-1/2 space-y-3">
          <h1 className="text-4xl">Welcome to EatHealthy!🥦</h1>
          Your journey to a healthier, happier you starts here. At EatHealthy,
          we believe that nutritious food doesn't have to be boring. Whether
          you're just starting your wellness journey or looking to improve your
          daily habits, we've got your back with delicious recipes, smart tips,
          and personalized guidance.
          <ul className="space-y-2 text-xl md:m-5 m-3">
            <li>🌱 Explore clean eating made simple</li>
            <li>🍓 Discover tasty, wholesome recipes</li>
            <li>💪 Fuel your body with the nutrients it deserves Ready to</li>
          </ul>
          transform your plate and your lifestyle? Let’s make healthy eating
          easy — and fun — together!
        </div>
        <Button
          effect="expandIcon"
          icon={ArrowRightIcon}
          iconPlacement="right"
          className=" text-2xl  p-10"
          asChild
        >
          <Link href="/auth/register"> Let's Get Started</Link>
        </Button>
      </main>
    </>
  );
}
