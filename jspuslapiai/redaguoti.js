let objId = localStorage.getItem("noteId");
let id = sessionStorage.getItem("ID");
let typeField = document.querySelector("#type");
let contentField = document.querySelector("#content");
let endDateField = document.querySelector("#endDate");

Search();

function Search() {
  fetch(`https://localhost:7171/api/ToDo/${objId}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        alert("Klaida");
      }
    })
    .then((json) => {
      if (json.id == objId) {
        typeField.disabled = false;
        contentField.disabled = false;
        endDateField.disabled = false;

        typeField.defaultValue = json.type;
        contentField.defaultValue = json.content;
        endDateField.defaultValue = json.endDate.slice(0, 10);
      }
    });
}

function Save() {
  let inputType = document.querySelector("#type").value;
  let inputContent = document.querySelector("#content").value;
  let inputEndDate = document.querySelector("#endDate").value;

  if (inputType != "" && inputContent != "" && inputEndDate != "") {
    fetch(`https://localhost:7171/api/ToDo/${objId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
        type: inputType,
        content: inputContent,
        endDate: inputEndDate,
        id: objId,
      }),
    }).then((res) => {
      if (res.ok) {
        location.href = "./toDo.html";
      } else {
        alert("Klaida");
      }
    });
  }
}
