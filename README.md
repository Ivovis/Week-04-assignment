Pan Galactic Guestbook

Themed to help assessor's relentless assessing from becoming too boring.

---

    Checkpoint 1: 2025 05 22 1419

    I have created the monorepo with client and server, added basic files to the server, Including the following.

    - queries.sql - defines the table creation, I copied and pasted this into the supaBase online sql editor, dropped the table after I first created it to add quotes to the table and column names so it correctly used my capitalisation.
    - seed.js - Created a list of dummy data using an AI assistant - just the array, then used JS to place the dummy data into the database, proving the connection string and my JS code were correct.

    - added this file, and will now create the repo on github and push my work for this checkpoint.

---

    Checkpoint 2: 2025 05 22 1531

    Completed basic client, its currently complaining because the servers not been done yet, but it is reporting the form data to the console correctly, looks like I'm developing this like eating a lion bar from both ends at once!.

<img src="./misc/Week4Wireframe.png" alt="wireframe layout of the planned application" width="400">

    CSS to follow

---

Checkpoint 3: 2025 05 23 0915

- The server now accepts the clients post and sends it to the database, no problems here, I tested and found that I must use quotes around my table name and column names because I am using camel case for both, researching on this it would seem this issue will depend on what database system is being used, and also that it is recommended to use lower case table names, and either all upper or lower for the column names - lesson learned.

---

Checkpoint 4: 2025 05 23 1054

- I now have the chain working, the client asks for the current comments and get then displays them, a new comment can be created and will be added to the database. I have the query asking for the result to be ordered in descending based on the ID so the latest comments are shown at the top of the list rendered to the user.

outstanding issue to be fixed next, after adding a new comment the page needs to be reloaded for the user to see it, I suspect theres a better mechanisim for this, for now I will only use what we have covered in the bootcamp, I will use setInterval to request the current comments every 5 seconds and I may also use a setTimeout to call for an update 1 second after the post request, to make the new comment appear faster.

---
