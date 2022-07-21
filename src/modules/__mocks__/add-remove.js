import displayList from '../displayList.js';
import Task from '../taskClass.js';

export  function addToList() {
    const toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
    let taskInput = 'test new file'
    const newTask = new Task(taskInput);
    toDos.push(newTask);
    taskInput = '';
    localStorage.setItem('toDos', JSON.stringify(toDos));

};

export function removeFromList() {
    const toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
    toDos = toDos.filter((task) => task.id !== e.target.id);
    localStorage.setItem('toDos', JSON.stringify(toDos));


}

module.exports = {
    addToList, removeFromList,
};