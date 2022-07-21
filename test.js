/**
 * @jest-environment jsdom
 */

import displayList from "../src/modules/displayList.js";
import addToList from "../src/modules/__mocks__/addFunction.js";

test("add new task", () => {
  document.body.innerHTML = `
     <ul id="list"></ul>
     `;
  addToList();
  const toDos = JSON.parse(localStorage.getItem("tasks"));

  displayList();

  const list = document.querySelectorAll("#list li");
  expect(list).toHaveLength(1);
});
