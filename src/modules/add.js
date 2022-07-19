import Task from "./taskClass.js";
import { getStorage, setStorage } from "./storage.js";

export default function addToList() {
  const taskInput = document.querySelector("#task-input");
  const addIcon = document.querySelector("#add");
  const messageBox = document.querySelector("#message-display");
  messageBox.style.display = "none";

  addIcon.addEventListener("click", () => {
    // let toDos = [];
    let toDos;
    // toDos = JSON.parse(localStorage.getItem("toDos") || "[]");
    // get storage function
    toDos = getStorage();
    if (taskInput.value !== "") {
      const newTask = new Task(taskInput.value);
      toDos.push(newTask);
      console.log(toDos);
      toDos.forEach((obj, i) => {
        obj.index = i + 1;
      });
      localStorage.setItem("toDos", JSON.stringify(toDos));
      // set storage function
      setStorage();
      taskInput.value = "";
      // window.location.reload();
    } else {
      messageBox.style.display = "flex";
      messageBox.innerText = "You didn't write anything!";
      messageBox.style.color = "tomato";
    }
  });
}
