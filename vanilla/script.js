const $ = (query) => document.querySelector(query);

const addButton = $(".add-button");
const addDialogOverlay = $(".add-dialog-overlay");
const addDialogForm = $(".add-dialog-form");
const addDialogInput = $(".add-dialog__input");
const addDialogCancelButton = $(".add-dialog__cancel-button");
const addDialogDoneButton = $(".add-dialog__done-button");
const todoItemsSection = $(".todo-items");

const createTodoItem = (todoItem) => {
  return `
    <div class="todo-item__wrapper">
      <span class="todo-item__text">${todoItem}</span>
      <button class="todo-item__button">Delete</button>
    </div>`;
};

const todoItems = ["Bacon", "Eggs", "Bread", "Milk"];

for (let i = 0; i < todoItems.length; i++) {
  const todoItem = todoItems[i];

  todoItemsSection.innerHTML += createTodoItem(todoItem);
}

let isOpen = false;

const toggleDialog = () => {
  if (!isOpen) {
    addDialogOverlay.style.display = "grid";
  } else {
    addDialogOverlay.style.display = "none";
  }

  isOpen = !isOpen;
};

addDialogForm.onsubmit = (e) => {
  e.preventDefault();

  toggleDialog();
  todoItemsSection.innerHTML += createTodoItem(addDialogInput.value);
  addDialogForm.reset();
};

addButton.onclick = () => {
  toggleDialog();
};

addDialogCancelButton.onclick = () => {
  toggleDialog();
  addDialogForm.reset();
};
