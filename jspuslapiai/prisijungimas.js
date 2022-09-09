document.querySelector("#login").onclick = function () {
  let inputLogin = document.querySelector("#inputLogin").value;
  let inputPassword = document.querySelector("#inputPassword").value;

  if (inputLogin != "" && inputPassword != "") {
    fetch(
      `https://localhost:7171/api/Auth?username=${inputLogin}&password=${inputPassword}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert("Tokio vartotojo nera, prisiregistruokite");
        }
      })
      .then((json) => {
        sessionStorage.setItem("ID", json.id);
        sessionStorage.setItem("Username", json.userName);
        sessionStorage.setItem("Email", json.email);

        location.href =
          "file:///C:/Users/Emilija/Desktop/Frontend/Front_Atsiskaitymas/htmlpuslapiai/toDo.html";
      });
  }
};
