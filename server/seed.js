// generated locally using GPT4all using the Llama 3 8B instruct model

const guestbookData = [
  {
    userName: "Zaphod Beeblebrox",
    userComment:
      "Don't panic, but I just had the most fantastic idea for a new party trick!",
  },
  {
    userName: "Ford Prefect",
    userComment:
      "I've been researching Earth and found that humans are surprisingly fond of tea. Who knew?",
  },
  {
    userName: "Trillian",
    userComment: "Just when you think things can't get any worse, they do.",
  },
  {
    userName: "Marvin the Paranoid Android",
    userComment:
      "What's the point of even having a party? It'll just end in disappointment and despair...",
  },
  {
    userName: "Slartibartfast",
    userComment:
      "I've been working on my latest masterpiece, a beautiful model of the Earth. Well, it would be if I hadn't accidentally deleted all my work.",
  },
  {
    userName: "The Guide Editor",
    userComment:
      "We don't need no stinkin' guide to tell us what to do! (But we have one anyway.)",
  },
  {
    userName: "Zaphod Beeblebrox II",
    userComment:
      "I just got a new haircut and I think it makes me look like the most intelligent being in the universe.",
  },
  {
    userName: "Prostetnic Vogon Jeltz",
    userComment:
      "Why do humans insist on celebrating birthdays? It's all so... human.",
  },
  {
    userName: "The Ravenous Bugblatter Beast of Traal",
    userComment: "I just ate a whole planet. Now I need a nap.",
  },
  {
    userName: "Arthur Dent",
    userComment: "Just when you think things can't get any stranger, they do.",
  },
  {
    userName: "Fenchurch",
    userComment: "I love the smell of burnt toast in the morning!",
  },
  {
    userName: "Slartibartfast II",
    userComment:
      "My latest model is a replica of the Earth. Well, it would be if I hadn't accidentally deleted all my work... again.",
  },
  {
    userName: "The Guide Editor (again)",
    userComment:
      "We don't need no stinkin' guide to tell us what to do! (But we have one anyway.)",
  },
  {
    userName: "Marvin the Paranoid Android II",
    userComment:
      "What's the point of even having a party? It'll just end in disappointment and despair... again.",
  },
  {
    userName: "Zaphod Beeblebrox III",
    userComment: "I just discovered that I have a twin brother. Who knew?",
  },
  {
    userName: "Trillian II",
    userComment:
      "Just when you think things can't get any worse, they do... again.",
  },
  {
    userName: "Ford Prefect II",
    userComment:
      "I found out that humans are surprisingly fond of tea. And biscuits!",
  },
  {
    userName: "The Ravenous Bugblatter Beast of Traal (again)",
    userComment:
      "I just ate another whole planet. Now I need a nap... and some antacids.",
  },
  {
    userName: "Arthur Dent II",
    userComment:
      "Just when you think things can't get any stranger, they do... again.",
  },
  {
    userName: "Fenchurch (again)",
    userComment:
      "I love the smell of burnt toast in the morning! And afternoon. And evening...",
  },
  {
    userName: "Slartibartfast III",
    userComment:
      "My latest model is a replica of the Earth. Well, it would be if I hadn't accidentally deleted all my work... again.",
  },
  {
    userName: "The Guide Editor (yet again)",
    userComment:
      "We don't need no stinkin' guide to tell us what to do! (But we have one anyway.)",
  },
  {
    userName: "Marvin the Paranoid Android III",
    userComment:
      "What's the point of even having a party? It'll just end in disappointment and despair... again. And again.",
  },
  {
    userName: "Zaphod Beeblebrox IV",
    userComment:
      "I just discovered that I have three more twin brothers! Who knew?",
  },
  {
    userName: "Trillian III",
    userComment:
      "Just when you think things can't get any worse, they do... again. And again.",
  },
  {
    userName: "Ford Prefect III",
    userComment:
      "I found out that humans are surprisingly fond of tea. And biscuits! And cake!",
  },
  {
    userName: "The Ravenous Bugblatter Beast of Traal (again)",
    userComment:
      "I just ate another whole planet. Now I need a nap... and some antacids... and a stomach pump.",
  },
  {
    userName: "Arthur Dent III",
    userComment:
      "Just when you think things can't get any stranger, they do... again. And again. And again.",
  },
  {
    userName: "Fenchurch (again)",
    userComment:
      "I love the smell of burnt toast in the morning! And afternoon. And evening... and midnight!",
  },
  {
    userName: "Slartibartfast IV",
    userComment:
      "My latest model is a replica of the Earth. Well, it would be if I hadn't accidentally deleted all my work... again.",
  },
  {
    userName: "The Guide Editor (yet again)",
    userComment:
      "We don't need no stinkin' guide to tell us what to do! (But we have one anyway.)",
  },
];

// console.log(guestbookData);

import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

guestbookData.forEach(function (item) {
  // console.log("Guest:", item.userName, "comment:", item.userComment);
  db.query(
    `INSERT INTO "guestBook" ("guestName","guestComment") VALUES($1,$2)`,
    [item.userName, item.userComment]
  );
});
