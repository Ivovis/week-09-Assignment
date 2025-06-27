import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <SignUp />
      </div>
    </div>
  );
}
