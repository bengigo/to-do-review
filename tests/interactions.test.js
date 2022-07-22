/**
 * @jest-environment jsdom
 */

import addToList from "../src/modules/__mocks__/add-remove";
import interactions from "../src/modules/interactions";

test('should change completed value', () => {
    document.body.innerHTML = `
    <div class="task-info">
      <input class="checkbox" type="checkbox">
      <input class="editable" value="finish testing"></input>
    </div>
    `
})