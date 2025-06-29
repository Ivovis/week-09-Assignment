"use server";
// This component will display all the comments from every user if who=""
// and all the comments from a particular user when who="{userId}" the clerk userId

import { db } from "@/utils/dbConnection";

export default async function CommentList(props) {
  // The query will be conditionally called
  let query = null;

  // if no clerk id is provided we render all comments
  // else we render all the comments for the clerk id
  if (props.who === "") {
    query = await db.query(`SELECT * FROM profile_comments ORDER BY id DESC`);
  } else {
    query = await db.query(
      `SELECT * FROM profile_comments WHERE k_id = $1 ORDER BY id DESC`,
      [props.who]
    );
  }

  const data = query.rows;

  return (
    <>
      <section className="flex flex-col  h-lvh  overflow-y-auto  border-2 p-2 mt-3 rounded-2xl">
        {data.map((comment) => (
          <p
            key={comment.id}
            className="flex p-3 m-2 gap-2 text-xs border-2 rounded-2xl "
          >{`${comment.name}: ${comment.comment}`}</p>
        ))}
      </section>
    </>
  );
}
