// Theres probably a way to do this in the build process!

// const SERVURL = "http://localhost:8080";
const SERVURL = "https://week-04-assignment.onrender.com";

// handle user submissions
const guestForm = document.getElementById("guestForm");

function submissionHandler(event) {
  event.preventDefault();
  const formData = new FormData(guestForm);
  const formValues = Object.fromEntries(formData);
  const reply = fetch(SERVURL + "/newComment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });

  // tidy up by clearing the two input elements
  guestForm.reset();

  // force 1 second comment list update
  setTimeout(renderComments, 1000);
}

guestForm.addEventListener("submit", submissionHandler);

// get existing comments from the server

async function getComments() {
  const res = await fetch(SERVURL + "/comments");

  const comments = await res.json();
  // console.log(comments); // tested - working
  return comments;
}

function createCommentElements(commentArray) {
  const commentSection = document.getElementById("commentSectionID");

  // remove all children of the comment section
  commentSection.replaceChildren();

  commentArray.forEach((item) => {
    // create the elements
    const userName = document.createElement("h3");
    const userComm = document.createElement("p");
    const delButton = document.createElement("button");

    // update the elements
    userName.textContent = item.guestName;
    userComm.textContent = item.guestComment;
    delButton.textContent = "Delete";
    delButton.id = item.id;

    // append the elements
    commentSection.appendChild(userName);
    commentSection.appendChild(userComm);
    commentSection.appendChild(delButton);
  });
}

async function renderComments() {
  const commentArray = await getComments();
  // console.log("renderComments:", commentArray); //tested - working
  createCommentElements(commentArray);
}

// poor mans on page load:
renderComments();
setInterval(() => {
  renderComments();
}, 4000);
