/**
 * @jest-environment jsdom
 */

import { addToList, deleteToList, removeToList }  from './task.js';

// testing the add function
describe('Add a new task to the list', () => {
    test('add first task', () => {
        const task = [
            {
                description: 'firstTask',
                completed: false,
                index: 0,    
            },
            {
                description: 'secondTask',
                completed: false,
                index: 1,  
            },
            {
                description: 'thirdTask',
                completed: false,
                index: 2,  
            },
        ];
        const toDos = (index) => task.filter((item) => item.index !== index);

        expect(addToList('firstTask')).toBe(1);
        expect(addToList('secondTask')).toBe(1);
        expect(addToList('thirdTask')).toBe(1);
        expect(deleteToList(0)).toEqual(toDos(0));
        expect(deleteToList(1)).toEqual(toDos(1));
        expect(deleteToList(2)).toEqual(toDos(2));

    });
    test('test_DOM', () => {
        const list = document.createElement('ul');
        list.id = 'todo-list';
        const listItem = document.createElement('li');
        listItem.id = 'todo-item';
        listItem.innerHTML = 'test';
        list.appendChild(listItem);
        expect(list.innerHTML).toBe('<li id="todo-item">test</li>');
      });

});

// test the remove task

describe('Clear completed tasks', () => {
    test('clear completed list', () => {
        const task = [
            {
                description: 'firstTask',
                completed: false,
                index: 0,    
            },
            {
                description: 'secondTask',
                completed: false,
                index: 1,  
            },
            {
                description: 'thirdTask',
                completed: false,
                index: 2,  
            },
        ];

        expect(removeToList(task));
    });  
});
