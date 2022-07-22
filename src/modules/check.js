// import getStorage from "./storage";
import toDos from "./toDos";

export function check() {
  const checkboxes = document.querySelectorAll(".checkbox");

  checkboxes.forEach((box) => {
    box.addEventListener("click", (e) => {
    //   toDos = getStorage();
    let toDos = JSON.parse(localStorage.getItem('toDos') || '[]');


      if ((box.checked = true)) {
        toDos.forEach((obj) => {
          if (e.target.classList.contains(obj.index)) {
            obj.completed = true;
            // e.target.checked = true;
            localStorage.setItem("toDos", JSON.stringify(toDos));
          }
        });
      }
    });
  });
}
