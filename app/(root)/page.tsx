"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Unauthenticated } from "convex/react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-row justify-between  pt-4 gap-4">
      <Button variant={'outline'} >
        <Link href="/conversations">Conversations</Link>
      </Button>
      <p> hello world</p>
      <UserButton/>
      <Unauthenticated>
          <SignInButton
          mode="modal"
          forceRedirectUrl="/conversations"
          signUpFallbackRedirectUrl={"/conversations"}
          >
            <Button variant={'outline'} >Sign In</Button>

          </SignInButton>
      </Unauthenticated>
      
      </div>
      
  );
}