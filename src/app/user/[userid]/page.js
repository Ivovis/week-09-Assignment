import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/utils/dbConnection";
import NewProfileForm from "@/components/NewProfileForm";
import CommentList from "@/components/CommentList";

export default async function User({ params }) {
  // used to define the profile to view
  const param = await params;
  console.log("param id:", param.userid);

  // could check here that the param.userid is in a valid format - not in scope for the assignment,

  // used to identify 'a' logged in user
  const { userId } = await auth();
  console.log("auth  id:", userId);

  // if the userId is null the user is not logged in
  if (userId == null) {
    console.log("not logged in");
    redirect("/sign-in");
  }

  // have we got a profile for this user?
  //  1. get any/all rows that match in the profile table

  const query = await db.query(
    `SELECT * FROM user_profile WHERE k_id = $1 ORDER BY id DESC`,
    [param.userid]
  );

  // 2. if no profiles found and the visitor is the owner of this profile -> display the newprofile page
  if (query.rowCount === 0 && param.userid === userId) {
    return <NewProfileForm userid={userId} />;
  } else if (query.rowCount === 0) {
    // visitor is jumping onto a userID that has no profile
    // this should never happen, likely someone has altered the url looking for vulnerabilities
    // with more time I would render a random fake profile here using the param.userid as the
    // random seed so they see the same profile for a given url
    return (
      <>
        <div className="flex justify-around p-5">
          This users profile does not exist
        </div>
      </>
    );
  }

  // we have at least 1 rows so at least one profile, use the first returned
  // the rest should'nt exist - I'll just ignore them now (or later log it for investigation)
  const data = query.rows[0];

  // display the profile page
  console.log("the profile", data);

  return (
    <>
      <div className="flex justify-around p-5">{data.name}&apos;s Profile</div>
      <div className="flex justify-around p-5  m-2 mb-4 items-center border-2 rounded-2xl">
        {data.bio}
      </div>

      <div className="flex justify-around p-5">{data.name}&apos;s Posts</div>
      {/* add component to show users posts here */}
      <CommentList who={userId} />
    </>
  );
}
