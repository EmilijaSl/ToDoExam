let id = sessionStorage.getItem("ID");
let user = sessionStorage.getItem("Username");
let email = sessionStorage.getItem("Email");
let filtered;
let paragraph = document.createElement("p");
let noteBox = document.querySelector("#noteBox");

document.querySelector(
  "#username",
  "#email"
).innerHTML = `Sveiki, ${user}! <br> ${email}`;

fetch("https://localhost:7171/api/ToDo")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      alert("Klaida");
    }
  })
  .then((json) => {
    filtered = json.filter((x) => x.userId == id);

    filtered.map(function (filtered) {
      let noteText = document.createElement("div");
      let toDoId = document.createElement("p");
      let toDoType = document.createElement("p");
      let toDoContent = document.createElement("p");
      let toDoEndDate = document.createElement("p");
      let noButton = document.createElement("Button", (id = "button"));
      let edButton = document.createElement("Button", (id = "button"));

      noteText.className = "noteText";

      toDoId.innerHTML = `ID: ${filtered.id}`;
      toDoType.innerHTML = `Užduotis: ${filtered.type}`;
      toDoContent.innerHTML = `Informacija: ${filtered.content}`;
      toDoEndDate.innerHTML = `Iki kada atlikti: ${filtered.endDate.slice(
        0,
        10,
        localStorage.setItem("noteId", filtered.id)
      )}`;

      noteText.appendChild(toDoId);
      noteText.appendChild(toDoType);
      noteText.appendChild(toDoContent);
      noteText.appendChild(toDoEndDate);
      noteText.appendChild(noButton);
      noButton.innerHTML = "Ištrinti";

      noteText.appendChild(edButton);
      edButton.innerHTML = "Redaguoti";

      noteBox.append(noteText);

      noButton.addEventListener("click", () => {
        deleteNote(filtered.id);
      });
      edButton.addEventListener("click", () => {
        location.href = "redaguoti.html";
      });

      function editNote() {}

      function deleteNote(id) {
        fetch(`https://localhost:7171/api/ToDo/${id}`, {
          method: "DELETE",
        }).then((res) => {
          if (res.ok) {
            location.reload();
          } else {
            alert("Klaida");
          }
        });
      }
    });
  });
