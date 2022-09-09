function Add() {
  let id = sessionStorage.getItem("ID");
  let inputType = document.querySelector("#type").value;
  let inputContent = document.querySelector("#content").value;
  let inputEndDate = document.querySelector("#endDate").value;

  if (inputType != "" && inputContent != "" && inputEndDate != "") {
    fetch("https://localhost:7171/api/ToDo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
        type: inputType,
        content: inputContent,
        endDate: inputEndDate,
      }),
    }).then((res) => {
      if (res.ok) {
        location.href = "toDo.html";
      } else {
        alert("Klaida");
      }
    });
  }
}
