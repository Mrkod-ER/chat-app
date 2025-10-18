"use client";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";


export default function Home() {
  return (
    <div className="flex flex-col ">
      <Authenticated>
        <div className="w-full" >
          <p>You are signed in move to the conversation page</p>
        </div>
      </Authenticated>
      <Unauthenticated>
        <div className="w-full flex items-center justify-center">
          <SignInButton
          mode="modal"
          forceRedirectUrl="/conversations"
          signUpFallbackRedirectUrl={"/conversations"}
          >
            <Button variant={'outline'} >Sign In</Button>

          </SignInButton>
        </div>
      </Unauthenticated>
      
      </div>
      
  );
}