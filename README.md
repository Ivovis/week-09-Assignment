### Week 9 Assignment

## Build a Social Network

#### User Stories

🐿️ As a user, I want to sign up and log in securely using Clerk so that I can interact with the app as a user on the site and edit my user profile.

🐿️ As a user, I want to see an error/not found page (using error.js or not-found.js) if I try to visit a page on the site which doesn’t exist.

🐿️ As a user, I want an enhanced user experience with modern UI components, such as using a Radix UI Primitive or a similar library, so that the interface is more intuitive and visually appealing.

🐿️ As a user, I want to create and manage my profile, including adding information like a biography, so that I can personalise my account.

🐿️ As a user, I want to create my posts to be displayed on my profile page so that I can share and manage my content easily.

#### Requirements

🎯 Set up user sign-up and user login using Clerk.

🎯 Create and display an error/not found page if the user visits a page that doesn’t exist.

🎯 Use 1 or more Radix UI Primitive component, or something similar (e.g. use of a different component library to enhance UX, not just Tailwind).

🎯 Enable users to create a user profile, and input profile information (such as a user biography) using a form. Users and user information should be stored in their own table in the database and handled with an appropriate route (e.g. /user/[userId]).

🎯 Enable users to create posts associated with their Clerk userId. Posts should be displayed on the user’s profile page.

---

### Checkpoint 1

I now have a basic page with Home,Profile,Sign in,Sign up and About page, I have the header functionality working, as can be seen here.

<img src="./misc/W9-NotLoggedIn.png" alt="not logged in web page" width="400"/><img src="./misc/W9-LoggedIn.png" alt="logged in web page" width="400"/>

I do not have authentication page protection at this stage, I plan to add this in when I have a something more to protect.

---
