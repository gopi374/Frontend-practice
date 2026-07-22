const api_url = "/todos";

let todos = [];

const todoform = document.querySelector("#form");
let input = document.querySelector("#title-input");
const todolist = document.querySelector("#todo-list");
let addbtn = document.querySelector("#btn");
let todoid = document.querySelector("#todoid");

let cancelbtn = document.querySelector("#cancelbtn");

function rendertodos() {
  todolist.innerHTML = "";

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "todo";

    div.innerHTML = `
            <div class="todo-content">
                <h1>${todo.title}</h1>
            </div>

            <div>
                <button onclick="incPriority('${todo._id}', 'increase')">⬆️</button>
                <button onclick="incPriority('${todo._id}', 'decrease')">⬇️</button>
                <button onclick="deletetodo('${todo._id}')">❌</button>
                <button onclick="edittodo('${todo._id}')">✏️</button>
            </div>
        `;

    todolist.appendChild(div);
  });
}

async function fetchtodo() {
  try {
    const res = await fetch(api_url);

    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.status}`);
    }

    const data = await res.json();
    // console.log(data.message);
    // console.log(data.Todos)
    todos = data.Todos;

    console.log(todos);

    rendertodos();
  } catch (err) {
    console.log(err);
  }
}

todoform.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = input.value.trim();

  if (!title) return;

  const todo = { title };

  const editing = todoid.value !== "";

  try {
    let res;

    if (editing) {
      res = await fetch(`${api_url}/${todoid.value}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      if (!res.ok) {
        throw new Error(`Update failed: ${res.status}`);
      }

      reset();
    } else {
      res = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      if (!res.ok) {
        throw new Error(`Create failed: ${res.status}`);
      }
    }

    input.value = "";
    await fetchtodo();
  } catch (err) {
    console.log(err);
  }
});
async function deletetodo(id) {
  try {
    const res = await fetch(`${api_url}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`Delete failed: ${res.status}`);
    }

    await fetchtodo();
  } catch (err) {
    console.log(err);
  }
}

// load todos when page opens
fetchtodo();

async function incPriority(id, action) {
  console.log("Patching id :", id);
  try {
    const res = await fetch(`${api_url}/${id}/priority`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action }),
    });

    if (!res.ok) {
      throw new Error(`Update failed: ${res.status}`);
    }

    await fetchtodo();
  } catch (err) {
    console.log(err);
  }
}

async function edittodo(id) {
  const todo = todos.find((t) => t._id === id);
  if (!todo) throw new Error("can't get todo");

  todoid.value = id;
  input.value = todo.title;

  addbtn.textContent = "update todo";
  cancelbtn.style.display = "inline-block";
}

function reset() {
  todoid.value = "";
  input.value = "";
  addbtn.textContent = "Add Todo";
  cancelbtn.style.display = "none";
}

cancelbtn.addEventListener("click", reset);
