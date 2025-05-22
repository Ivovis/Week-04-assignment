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
