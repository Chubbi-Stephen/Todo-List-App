let x = [];
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");
const addTask = document.querySelector("#new-task-submit");
const storedData = localStorage.getItem("todoStore");

window.addEventListener("load", () => {
  // if (storedData) {
  //   list_el = storedData;
  // }

  let oldItems = localStorage.getItem("item");

  if (oldItems !== null) {
    let splitted = oldItems.split(",");

    splitted.map((e) => {
      x.push(e);
      const task_el = document.createElement("div");
      task_el.classList.add("task");

      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");

      // Now we append the children to their respective parents.
      task_el.appendChild(task_content_el);
      list_el.appendChild(task_el);

      // If you check closely you'll see that the "task_content_el" html has an input tag inside of it. so, we have to make it come to life in the javaScript.
      const task_input_el = document.createElement("input");
      task_input_el.type = "text";
      task_input_el.classList.add("text");
      task_input_el.value = e;
      task_input_el.setAttribute("readonly", "readonly");

      // Then we append the child (task_input_el) to it's parent (task_content_el).
      task_content_el.appendChild(task_input_el);

      // Let's get the actions in the html running in our javaScript.
      const task_actions_el = document.createElement("div");
      task_actions_el.classList.add("actions");
      // append "actions" to "task".
      task_el.appendChild(task_actions_el);

      // create our buttons
      const task_actions_edit_el = document.createElement("button");
      const task_actions_delete_el = document.createElement("button");

      // assign classes to buttons
      task_actions_edit_el.classList.add("edit");
      task_actions_edit_el.innerText = "Edit";
      task_actions_delete_el.classList.add("delete");
      task_actions_delete_el.innerText = "Delete";

      // append buttons to "actions".
      task_actions_el.appendChild(task_actions_edit_el);
      task_actions_el.appendChild(task_actions_delete_el);

      input.value = "";

      // // This code is meant to make our edit button do all we want it to do.
      // task_actions_edit_el.addEventListener("click", () => {
      //   if (task_actions_edit_el.innerText.toLowerCase() === "edit") {
      //     task_input_el.removeAttribute("readonly");
      //     task_input_el.focus();
      //     task_actions_edit_el.innerText = "Save";
      //   } else {
      //     task_input_el.setAttribute("readonly", "readonly");
      //     task_actions_edit_el.innerText = "Edit";
      //   }
      // });

      // // This code is meant to make our delete button do all we want it to do.
      // task_actions_delete_el.addEventListener("click", () => {
      //   list_el.removeChild(task_el);
      // });
    });
  }

  form.addEventListener("submit", (e) => {
    // This is to prevent the webpage from reloading after submitting the form.
    e.preventDefault();

    // This is to take in the value from the form.
    const task = input.value;

    if (task === "") {
      alert("Please fill out the task");
      return;
    }

    // We create a new div and add a class "task" to it. Do not forget that "task" is the name of the class in the Html "They have to match for this to work!"
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    // Now we append the children to their respective parents.
    task_el.appendChild(task_content_el);
    list_el.appendChild(task_el);

    // If you check closely you'll see that the "task_content_el" html has an input tag inside of it. so, we have to make it come to life in the javaScript.
    const task_input_el = document.createElement("input");
    task_input_el.type = "text";
    task_input_el.classList.add("text");
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    // Then we append the child (task_input_el) to it's parent (task_content_el).
    task_content_el.appendChild(task_input_el);
    x.push(task);
    localStorage.setItem("item", x);

    // Let's get the actions in the html running in our javaScript.
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");
    // append "actions" to "task".
    task_el.appendChild(task_actions_el);

    // create our buttons
    const task_actions_edit_el = document.createElement("button");
    const task_actions_delete_el = document.createElement("button");

    // assign classes to buttons
    task_actions_edit_el.classList.add("edit");
    task_actions_edit_el.innerText = "Edit";
    task_actions_delete_el.classList.add("delete");
    task_actions_delete_el.innerText = "Delete";

    // append buttons to "actions".
    task_actions_el.appendChild(task_actions_edit_el);
    task_actions_el.appendChild(task_actions_delete_el);

    input.value = "";

    // This code is meant to make our edit button do all we want it to do.
    task_actions_edit_el.addEventListener("click", () => {
      if (task_actions_edit_el.innerText.toLowerCase() === "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_actions_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_actions_edit_el.innerText = "Edit";
      }
    });

    // This code is meant to make our delete button do all we want it to do.
    task_actions_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });

  // Saving using localStorage
  // const saveToLocalStorage = () => {
  //   localStorage.setItem("todoStore", list_el.children);
  // };

  // Adding event listener to our button
  // addTask.addEventListener("click", saveToLocalStorage);
});
