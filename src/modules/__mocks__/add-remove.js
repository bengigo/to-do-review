import displayList from '../displayList.js';
import Task from '../taskClass.js';

export default function addToList() {
    const toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
    let taskInput = 'test new file'
    const newTask = new Task(taskInput);
    toDos.push(newTask);
    taskInput = '';
    localStorage.setItem('toDos', JSON.stringify(toDos));

};

export function removeFromList(task) {
    let toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
    displayList();

}

module.exports = {
    addToList, removeFromList,
};