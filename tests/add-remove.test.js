/**
 * @jest-environment jsdom
 */

import { TestEnvironment } from "jest-environment-jsdom";
import { before } from "lodash";
import displayList from "../src/modules/displayList.js";
import Task from "../src/modules/taskClass.js";
import toDos from "../src/modules/toDos.js";
import {addToList,removeFromList} from "../src/modules/__mocks__/add-remove.js";

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

  removeFromList({index: 1});
  toDos = JSON.parse(localStorage.getItem("tasks"));
  displayList();
  expect(list).toHaveLength(initialLength - 1);

});
