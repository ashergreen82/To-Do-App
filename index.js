const submit_button = document.getElementById("test_button");
submit_button.addEventListener("click", user_entered_something);

function user_entered_something(e) {
    e.preventDefault();
    let user_input = document.getElementById("To_do_item").value;

    // Step is create a div which will be the outer container
    const container = document.createElement("div");
    document.getElementById("checkbox_location").appendChild(container);

    // This step is to create a label
    const label_1 = document.createElement("label");
    label_1.innerText = user_input;
    label_1.setAttribute("for", user_input);
    // label_1.setAttribute("style", "text-decoration: line-through");
    container.appendChild(label_1);

    // This step is to create the checkbox
    const check_box = document.createElement("input");
    check_box.setAttribute("name", user_input);
    check_box.setAttribute("id", user_input);
    check_box.setAttribute("type", "checkbox");
    container.appendChild(check_box);

    // My event listener
    check_box.addEventListener("change", user_checked_box);
    // When the box is checked
    function user_checked_box(e) {
        is_box_checked = e.target.checked;
        // check_box2.setAttribute("name", user_input);
        const check_box2 = document.createElement("input");
        if (is_box_checked == true) {
            console.log('Checkbox is checked');
            label_1.setAttribute("style", "text-decoration: line-through");
            check_box2.setAttribute("name", user_input);
            check_box2.setAttribute("id", user_input);
            check_box2.setAttribute("type", "checkbox");
            // check_box2.setAttribute("checked");
            container.appendChild(check_box2);
        } else {
            console.log("Checkbox is not checked");
            label_1.setAttribute("style", "text-decoration: none");
            check_box2.remove();
        }
    }

    user_input.value = "";

}