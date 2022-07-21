/**
 * @jest-environment jsdom
 */

import deleteFromList from "./src/modules/delete.js";
import displayList from "./src/modules/displayList.js";
import addToList from "./src/modules/__mocks__/addFunction.js";

describe("should add and remove one task", () => {
  test("add new task to list", () => {
    document.body.innerHTML = `
       <ul id="list"></ul>
       `;
    addToList();
    const toDos = JSON.parse(localStorage.getItem("tasks"));

    displayList();

    const list = document.querySelectorAll("#list li");
    expect(list).toHaveLength(1);
  });

  test("remove a task from list", () => {
    document.body.innerHTML = `
    <ul id="list"></ul>
    `;
    addToList();
    addToList();
    addToList();

    let toDos = JSON.parse(localStorage.getItem("tasks"));

    displayList();

    let list = document.querySelectorAll("#list li");
    const initialLength = list.length;

    deleteFromList({index: 1});
    toDos = JSON.parse(localStorage.getItem("tasks"));
    displayList();
    list = document.querySelectorAll("#list li");
    expect(list).toHaveLength(initialLength - 1);

  });
});
