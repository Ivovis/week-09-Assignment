import CommentList from "@/components/CommentList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col flex-grow justify-between">
      <p className="flex justify-around p-5">Home Page</p>
      <CommentList who="" />
    </div>
  );
}
