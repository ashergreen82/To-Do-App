const submit_button = document.getElementById("submit_button");
submit_button.addEventListener("click", user_entered_something);

function user_entered_something(e) {
    e.preventDefault();
    const toDoInput = document.getElementById("To_do_item");
    const userInput = toDoInput.value;

    // Step is create a div which will be the outer container
    const container = document.createElement("div");
    container.setAttribute("class", "to_do_item");
    document.getElementById("todo_item_container").appendChild(container);

    // This step is to create a delete button
    const delBtn = document.createElement("button");
    delBtn.innerText = "x";
    delBtn.style.display = "none";
    container.appendChild(delBtn);
    delBtn.addEventListener("click", removeTodoItemfromList)

    // This step is to create a label
    const label_1 = document.createElement("label");
    label_1.innerText = userInput;
    label_1.setAttribute("for", userInput);
    // label_1.setAttribute("style", "text-decoration: line-through");
    container.appendChild(label_1);

    // This step is to create the checkbox
    const checkBox = document.createElement("input");
    checkBox.setAttribute("name", userInput);
    checkBox.setAttribute("id", userInput);
    checkBox.setAttribute("type", "checkbox");
    container.appendChild(checkBox);

    // My event listener
    checkBox.addEventListener("change", user_checked_box);
    // When the box is checked
    function user_checked_box(e) {
        isBoxChecked = e.target.checked;
        const deleteButton = e.target.previousSibling.previousSibling;
        // checkBox2.setAttribute("name", userInput);
        if (isBoxChecked == true) {
            console.log('Checkbox is checked');
            label_1.setAttribute("style", "text-decoration: line-through");
            deleteButton.style.display = null;
        } else {
            console.log("Checkbox is not checked");
            label_1.setAttribute("style", "text-decoration: none");
            deleteButton.style.display = "none";
        }
    }

    function removeTodoItemfromList() {
        checkBox.remove();
        label_1.remove();
        delBtn.remove();
    }

    toDoInput.value = "";
}