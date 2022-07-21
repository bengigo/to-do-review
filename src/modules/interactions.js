import getStorage from "./storage.js";

export function check() {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((box) => {
    box.addEventListener('click', (e) => {
      let toDos = [];
      toDos = getStorage();

      toDos.forEach((obj) => {
        if (e.target.classList.contains(obj.index)) {
          obj.completed = true;
          e.target.checked = true;
          localStorage.setItem('toDos', JSON.stringify(toDos));
        }
      });
    });
  });
}

export function uncheck() {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((box) => {
    box.addEventListener('')
  })
}

module.exports = {
  check, uncheck,
};