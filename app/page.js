"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useUser } from '@clerk/nextjs';

export default function Home() {
  const { user, isLoaded, isSignedIn } = useUser();

  // Wait for Clerk to load user data
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // If the user is not signed in, show a sign-in prompt
  if (!isSignedIn) {
    return <div>Please sign in to continue</div>;
  }

  console.log('User Object:', user);  // Should log the user object correctly
  console.log('User Email:', user?.primaryEmailAddress?.emailAddress);
  return (
    <div>
    <h1>Welcome, {user.primaryEmailAddress.emailAddress}</h1>
    {/* Your recording logic here */}
  </div>
  );
}
