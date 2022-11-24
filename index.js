const submit_button = document.getElementById("submit_button");
submit_button.addEventListener("click", user_entered_something);

function user_entered_something(e) {
    e.preventDefault();
    const toDoInput = document.getElementById("To_do_item");
    const userInput = toDoInput.value.trim();

    if (!userInput) return;

    // div container
    const container = document.createElement("div");
    container.setAttribute("class", "to_do_item");
    document.getElementById("todo_item_container").appendChild(container);

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.setAttribute("class", "delete-button");
    delBtn.style.display = "none";
    container.appendChild(delBtn);
    delBtn.addEventListener("click", removeTodoItemfromList);

    // Label
    const label_1 = document.createElement("label");
    label_1.innerText = userInput;
    label_1.setAttribute("for", userInput);
    container.appendChild(label_1);

    // Checkbox
    const checkBox = document.createElement("input");
    checkBox.setAttribute("name", userInput);
    checkBox.setAttribute("id", userInput);
    checkBox.setAttribute("class", "checkbox-button");
    checkBox.setAttribute("type", "checkbox");
    container.appendChild(checkBox);
    checkBox.addEventListener("change", user_checked_box);

    // When the box is checked routine
    function user_checked_box(e) {
        isBoxChecked = e.target.checked;
        const deleteButton = e.target.previousSibling.previousSibling;
        if (isBoxChecked == true) {
            label_1.setAttribute("style", "text-decoration: line-through");
            deleteButton.style.display = null;
        } else {
            label_1.setAttribute("style", "text-decoration: none");
            deleteButton.style.display = "none";
        }
    }

    function removeTodoItemfromList() {
        checkBox.remove();
        label_1.remove();
        delBtn.remove();
        container.remove();
    }

    toDoInput.value = "";
}