// This component will display all the comments from every user if who=""
// and all the comments from a particular user when who="{userId}" the clerk userId

export default function CommentList(props) {
  // get props
  console.log("=============\n", props.who);

  if (props.who === "") {
    // get the full list
    return (
      <>
        <p className="flex justify-around p-5">EVERYONE</p>
      </>
    );
  }

  return (
    //get the posts from a single user
    <div>
      <p className="flex justify-around p-5">Just him</p>
    </div>
  );
}
