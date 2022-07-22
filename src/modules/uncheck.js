import getStorage from "./storage";
// import toDos from "./toDos";

export function uncheck() {
  const checkboxes = document.querySelectorAll(".checkbox");

  checkboxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      const toDos = JSON.parse(localStorage.getItem("toDos") || "[]");

      box.checked = false;

    //   if ((box.checked = false)) {
        toDos.forEach((obj) => {
          if (e.target.classList.contains(obj.index)) {
            obj.completed = false;
            e.target.checked = false;
            localStorage.setItem("toDos", JSON.stringify(toDos));
          }
        });
      // }
    });
  });
}
