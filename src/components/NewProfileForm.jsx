import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function NewProfileForm(props) {
  const userId = props.userid;

  async function handleSubmit(formData) {
    "use server";

    formData = {
      name: formData.get("name"),
      bio: formData.get("bio"),
    };

    // check that the user name is not already in use
    // select all from user_profile where name = formData.name
    // if query.rowCount == 0 all is would be good
    // would be easy to check - no idea how to force the user to change it
    // I could just reload the component but the bio data would be lost
    // its not an assignment requirement so I will allow duplicate names for now

    db.query(`INSERT INTO user_profile(name,bio,k_id) VALUES ($1,$2,$3)`, [
      formData.name,
      formData.bio,
      userId,
    ]);

    // revalidate
    revalidatePath(`/user/${userId}`);

    // redirect
    redirect(`/user/${userId}`);
  }

  return (
    <div>
      <form
        action={handleSubmit}
        className="p-2 border-2 rounded-2xl flex flex-col"
      >
        <h1 className="text-center p-3">Time to create your profile</h1>
        <input
          type="text"
          name="name"
          maxLength="30"
          placeholder="Enter your display name here..."
          className="p-3 m-2 border-2 rounded-md h-10"
          required
        />

        <textarea
          type="text"
          name="bio"
          maxLength="299"
          placeholder="Enter your Bio here ..."
          required
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
      </form>
    </div>
  );
}
