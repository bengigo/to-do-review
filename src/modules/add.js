import Task from './taskClass.js';
import getStorage from './storage.js';
import toDos from './toDos.js';

export default function addToList() {
  const taskInput = document.querySelector('#task-input');
  const addIcon = document.querySelector('#add');
  const messageBox = document.querySelector('#message-display');
  messageBox.style.display = 'none';

  addIcon.addEventListener('click', () => {
    const toDos = getStorage();
    if (taskInput.value !== '') {
      const newTask = new Task(taskInput.value);
      toDos.push(newTask);
      toDos.forEach((obj, i) => {
        obj.index = i + 1;
      });
      localStorage.setItem('toDos', JSON.stringify(toDos));
      taskInput.value = '';
      window.location.reload();
    } else {
      messageBox.style.display = 'flex';
      messageBox.innerText = "You didn't write anything!";
      messageBox.style.color = 'tomato';
    }
  });
  // return toDos;
}
