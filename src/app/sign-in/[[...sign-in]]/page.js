import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <p>Sign in</p>
      <SignIn />
    </>
  );
}
