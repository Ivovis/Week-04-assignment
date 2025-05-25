import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.listen(10000, function () {
  console.log("servers up on port 8080");
});

// test root route
app.get("/", function (request, response) {
  response.json({ message: "Get out of my house!" });
});

// new comment from user route
app.post("/newComment", (req, res) => {
  const body = req.body;
  console.log(body);

  // sanity checks even though the client should behave, people don't!.
  // res.json({ message: "Nope not doing that" });
  // did we get a userName -> no so ignore
  // is userName empty -> ignore
  // did we get comment -> no so ignore
  // is comment empty -> ignore

  const query = db.query(
    `INSERT INTO "guestBook"("guestName","guestComment") VALUES ($1,$2)`,
    [body.userName, body.userComment]
  );
  res.json(query);
});

// user request for past comments route
app.get("/comments", async (req, res) => {
  const query = await db.query(`SELECT * from "guestBook" ORDER BY "id" DESC`);
  // get the rows - will be filtering them later
  let data = query.rows;

  // console.log("The data:", data);
  res.json(data);
});
