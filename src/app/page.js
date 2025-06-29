import CommentList from "@/components/CommentList";
import { auth } from "@clerk/nextjs/server";
import NewProfileForm from "@/components/NewProfileForm";
import { db } from "@/utils/dbConnection";

export default async function Home() {
  const { userId } = await auth();

  // if the user is logged in
  if (userId != null) {
    // check we have a profile
    const query = await db.query(
      `SELECT * FROM user_profile WHERE k_id = $1 ORDER BY id DESC`,
      [userId]
    );

    if (query.rowCount === 0) {
      // no profile redirect to profile page - this will display the new profile form
      console.log("no profile found redirecting");
      return <NewProfileForm userid={userId} />;
    }
  }

  return (
    <div className="flex-col flex-grow justify-between">
      <p className="flex justify-around p-5">Home Page</p>
      <CommentList who="" />
    </div>
  );
}
