import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/utils/dbConnection";
import NewProfileForm from "@/components/NewProfileForm";

export default async function User({ params }) {
  // Mental note params  not props!
  const param = await params;
  console.log("param id:", param.userid);

  const { userId } = await auth();
  console.log("auth  id:", userId);

  // I was using props instead of params and couldn't get it to work ...
  // I then used auth() to get the data I wanted , but checked with many
  // and found out I should be using params for url info

  // this got me to wondering if I can use this to detect if the param has been modified my an evil hacker

  if (param.userid === userId) {
    console.log("good url");
  } else {
    if (userId == null) {
      console.log("not logged in");
      // we don't have persistent login, so just get the user to login
      // this will leave the user on the home page
      // ideally this would after login redirect back here - not sure how to do this yet.
      redirect("/sign-in");
    }

    // arriving here indicates that userId is a person up to no good
    // out of scope for this project, but one could present random fake
    // profiles here using the bad url as the seed.
    console.log("bad url");
    // for now just kick them back to the home page.
    redirect("/");
  }

  // have we got a profile for this user?
  //  1. get any/all rows that match in the profile table

  const query = await db.query(
    `SELECT * FROM user_profile WHERE k_id = $1 ORDER BY id DESC`,
    [userId]
  );

  console.log("profile search returned: ", query.rowCount);

  // 2. if no profiles found -> display the newprofile page

  if (query.rowCount === 0) {
    return <NewProfileForm userid={userId} />;
  }

  // not zero rows so at least one profile, use the first the rest should'nt exist - ignore them!
  const data = query.rows[0];

  // if yes display the profile page
  console.log("the profile", data);

  return (
    <>
      <div className="flex justify-around p-5">{data.name}&apos;s Profile</div>
      <div className="flex justify-around p-5  m-2 mb-4 items-center border-2 rounded-2xl">
        {data.bio}
      </div>

      <div className="flex justify-around p-5">{data.name}&apos;s Comments</div>
    </>
  );
}
