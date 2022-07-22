import getStorage from "./storage.js";

export default function interactions() {
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      let toDos = [];
      toDos = getStorage();
      console.log(e.target.checked);

      if ((e.target.checked = true)) {
        toDos.forEach((obj) => {
          if (e.target.classList.contains(obj.index)) {
            obj.completed = true;
            localStorage.setItem("toDos", JSON.stringify(toDos));
          }
        });
      }
    });
  });
}
