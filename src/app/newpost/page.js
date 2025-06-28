import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/utils/dbConnection";

export default async function NewPost() {
  // check user is authenticated if not redirect to sign in
  const { userId } = await auth();
  if (userId == null) {
    redirect("/sign-in");
  }

  // get the users profile
  const query = await db.query(
    `SELECT * FROM user_profile WHERE k_id = $1 ORDER BY id DESC`,
    [userId]
  );

  // If no profile redirect to users profile page (this will trigger profile creation)
  if (query.rowCount === 0) {
    redirect(`/user/${userId}`);
  }
  // With the users profile we have access to the display name for the comment/post
  //   console.log("name:", query.rows[0].name);
  //   console.log("id:", query.rows[0].k_id);

  // handle submit
  async function handleSubmit(formData) {
    "use server";

    // get the data
    formData = {
      comment: formData.get("comment"),
    };

    // insert
    await db.query(
      `INSERT INTO profile_comments (k_id,comment,name) VALUES ($1,$2,$3)`,
      [query.rows[0].k_id, formData.comment, query.rows[0].name]
    );

    // update the profile and jump to it
    revalidatePath(`/user/${userId}`);
    redirect(`/user/${userId}`);
  }

  return (
    <>
      <div>
        <form action={handleSubmit} className="p-2 border-2 rounded-2xl">
          <legend className="m-2">New Post</legend>
          <hr />

          <section className="pt-2 grid">
            <textarea
              type="text"
              name="comment"
              maxLength="299"
              required
              autoFocus
              className="p-3 m-2 border-2 rounded-md h-30"
            />

            <div className="flex justify-center ">
              <button
                type="submit"
                className="p-2 mt-3 m-2 w-50 bg-fuchsia-100 border-2 rounded-md "
              >
                Save
              </button>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}
