document.querySelector("#signup").onclick = function () {
  let inputName = document.querySelector("#name").value;
  let inputPassword = document.querySelector("#password").value;
  let inputEmail = document.querySelector("#email").value;

  if (inputName != "" && inputPassword != "" && inputEmail != "") {
    fetch("https://localhost:7171/api/Auth", {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: inputName,
        password: inputPassword,
        email: inputEmail,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("Sekmingai uzsiregistravote");
        location.href =
          "file:///C:/Users/Emilija/Desktop/Frontend/Front_Atsiskaitymas/htmlpuslapiai/prisijungimas.html";
      } else {
        alert("Klaida");
      }
    });
  }
};
