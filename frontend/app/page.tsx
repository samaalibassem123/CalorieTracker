import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex sm:flex-row flex-col h-svh items-center justify-center p-5 sm:justify-center w-full space-y-3.5">
      <div className="sm:w-1/2 space-y-3">
        <h1 className="text-4xl">Welcome to EatHealthy!🥦</h1>
        Your journey to a healthier, happier you starts here. At EatHealthy, we
        believe that nutritious food doesn't have to be boring. Whether you're
        just starting your wellness journey or looking to improve your daily
        habits, we've got your back with delicious recipes, smart tips, and
        personalized guidance.
        <ul className="space-y-2 text-xl md:m-5 m-3">
          <li>🌱 Explore clean eating made simple</li>
          <li>🍓 Discover tasty, wholesome recipes</li>
          <li>💪 Fuel your body with the nutrients it deserves Ready to</li>
        </ul>
        transform your plate and your lifestyle? Let’s make healthy eating easy
        — and fun — together!
      </div>
      <Button
        effect="expandIcon"
        icon={ArrowRightIcon}
        iconPlacement="right"
        className=" sm:text-2xl  sm:p-10"
      >
        Let's Get Started
      </Button>
    </main>
  );
}
