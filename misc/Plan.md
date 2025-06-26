As far as I can see the assignment title is a little missleading, however its aim was well explained.

WE are not required to build a social network, but rather the user access to a site, we do not need to create a system of post creation or display.

We do need to handle a new user arriving on the home page and choosing to sign up or sign in.

1. If signed in they should be able to view thier profile.
2. If the profile does not exist they should be directed to the profile edit page.
3. The profile edit page will only handle new profile data at this time.
4. If the profile page exists it will be displayed.
5. User profile will contain a display name
6. User profile will contain a user biography
7. The user profile page needs a form to add posts.
8. The user profile page needs display posts the user has created.

notes 7 and 8 are needed to meet the last requirment:

🎯 Enable users to create posts associated with their Clerk userId. Posts should be displayed on the user’s profile page.

Manny said we do not need to exactly that! will need to clarify.

To play safe I will include comments for the user profile page.

I need to make a bare bones version of my blog assignment, and add the user profile content.

Seeing as I must at some point connect a users profile with their clerk ID in a database table, it makes sense to just add it to the comment system I created last week.

So maybe not so much bare bones after all.

#### Data tables

I'll use the same tables for user comments but will add a column that will hold the clerkID

I will later add them to the to the blog_posts table so the user can later create new blog posts.

I will need a user_profile table that will need to hold, id, clerkid, displayname, bio
