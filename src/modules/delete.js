import getStorage from './storage.js';

export default function deleteFromList() {
  const deleteIcon = document.querySelectorAll('.delete');
  deleteIcon.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      let toDos = getStorage();
      toDos = toDos.filter((task) => task.id !== e.target.id);
      toDos.forEach((obj, i) => {
        obj.index = i + 1;
      });
      localStorage.setItem('toDos', JSON.stringify(toDos));
      window.location.reload();
    });
  });
}

export const removeToList = (list) => list.filter((todo) => todo.completed === false);
