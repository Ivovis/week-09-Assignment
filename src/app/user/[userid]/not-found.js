import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center  items-center p-15">
      <h1>Profile not found</h1>
      <Link href="/">
        <div className="m-10 p-2 border-2 rounded-2xl w-40 text-center">
          Take Me Back
        </div>
      </Link>
    </div>
  );
}
