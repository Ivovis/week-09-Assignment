As far as I can see the assignment title is a little misleading, however its aim was well explained.

WE are not required to build a social network, but rather the user access to a site, we do not need to create a system of post creation or display.

We do need to handle a new user arriving on the home page and choosing to sign up or sign in.

1. If signed in they should be able to view their profile.
2. If the profile does not exist they should be directed to the profile edit page.
3. The profile edit page will only handle new profile data at this time.
4. If the profile page exists it will be displayed.
5. User profile will contain a display name
6. User profile will contain a user biography
7. The user profile page needs a form to add posts.
8. The user profile page needs display posts the user has created.

notes 7 and 8 are needed to meet the last requirement:

🎯 Enable users to create posts associated with their Clerk userId. Posts should be displayed on the user’s profile page.

Manny said we do not need to create posts - exactly that! will need to clarify.

To play safe I will include comments for the user profile page.

I need to make a bare bones version of my blog assignment, and add the user profile content.

Seeing as I must at some point connect a users profile with their clerk ID in a database table, it makes sense to just add it to the comment system I created last week.

So maybe not so much bare bones after all.

#### Data tables

I'll use the same tables for user comments but will add a column that will hold the clerkID

I will later add them to the to the blog_posts table so the user can later create new blog posts.

I will need a user_profile table that will need to hold, id, clerkid, displayname, bio

---

I have a profile table that holds the users display name and a biography, user_profile the biography defaults to and empty string ("") rather than null, so I always have a string to render, the profile has a normal id key as primary but I also have another text field to hold the clerk id (k_id), having two separate id's makes sense here because we may in the future change authentication provider and this should allow some flexibility in the migration.

I have created a table to hold profile_comments:

- id primary key.
- A clerk id as k_id, this is the posters profile id
- A text to hold the comment
- foreign key 'profileid' ties this comment to a particular profile - user_profile(id)

add error handling - done

---

Sunday...

Add something nice to demonstrate use of external library (Use 1 or more Radix UI Primitive component) - Done

have a look at body hight setting - its too large it should be limited to the physical screen height or browser window height - atm its causing window scrolling for the whole screen. - over an hour spent fiddling around and asking google silly questions - abandoned

use the switch to change the order of posts in the CommentList component? - not really needed, demo of radix-ui component use on the about page.

Stretch goals:

🏹 Ensure that a user’s biography cannot be left blank. If a user logs in without one, prompt them to add this information. - DONE

Add/convert comment list into links to the posters profile page
