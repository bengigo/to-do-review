import getStorage from "./storage.js";

 export default function interactions() {
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      let toDos = [];
      toDos = getStorage();

      toDos.forEach((obj) => {
        if (e.target.classList.contains(obj.index)) {
          obj.completed = true;
          e.target.checked = true;
          localStorage.setItem("toDos", JSON.stringify(toDos));
        }
      });
    });
  });
}