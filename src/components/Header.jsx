import Link from "next/link";
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

import { auth } from "@clerk/nextjs/server";

export default async function Header() {
  const { userId } = await auth();

  return (
    <>
      <div className="flex justify-around p-2 mb-4 h-22 items-center border-2 rounded-2xl font-[family-name:var(--font-geist-sans)]">
        <Link href="/">Home</Link>
        <SignedIn>
          <Link href={`/user/${userId}`}>Profile</Link>
          <Link href={`/newpost/`}>New Post</Link>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="flex justify-between gap-3">
            <SignInButton mode="modal" />
            <SignUpButton mode="modal" />
          </div>
        </SignedOut>
        <Link href="/about">About</Link>
      </div>
    </>
  );
}
