import './style.css';
import addToList from './modules/add.js';
import displayList from './modules/displayList.js';
import deleteFromList from './modules/delete.js';
import editTest from './modules/editTask.js';
import { check, uncheck } from './modules/interactions';
import clearCompleted from './modules/clear.js';

addToList();

displayList();

deleteFromList();

editTest();

check();

uncheck();

clearCompleted();
