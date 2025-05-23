// handle user submissions
const guestForm = document.getElementById("guestForm");

function submissionHandler(event) {
  event.preventDefault();
  const formData = new FormData(guestForm);
  const formValues = Object.fromEntries(formData);
  const reply = fetch("http://localhost:8080/newComment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  console.log(formValues);
}

guestForm.addEventListener("submit", submissionHandler);

// get existing comments from the server
async function getComments() {
  const res = await fetch("http://localhost:8080/comments");

  const comments = await res.json();
  // console.log(comments); // tested - working
  return comments;
}

function createCommentElements(commentArray) {
  // later will need to remove all children
  // of the comment section because I hope to call this after a new comment has been added
  const commentSection = document.getElementById("commentSectionID");

  commentSection.replaceChildren();

  commentArray.forEach((item) => {
    // create the elements
    const userName = document.createElement("h3");
    const userComm = document.createElement("p");

    // update the elements
    userName.textContent = item.guestName;
    userComm.textContent = item.guestComment;

    // append the elements
    commentSection.appendChild(userName);
    commentSection.appendChild(userComm);
  });
}

async function renderComments() {
  const commentArray = await getComments();
  // console.log("renderComments:", commentArray); //tested - working
  createCommentElements(commentArray);
}

renderComments();
