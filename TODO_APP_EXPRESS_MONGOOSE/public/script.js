const api_url = "/todos";

let todos = [];

const todoform = document.querySelector("#form");
const input = document.querySelector("#title-input");
const todolist = document.querySelector("#todo-list");


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
                <button onclick="incPriority('${todo._id}', true)">⬆️</button>
                <button onclick="incPriority('${todo._id}', false)">⬇️</button>
                <button onclick="deletetodo('${todo._id}')">❌</button>
                <button>✏️</button>
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

    const todo = {
        title: title
    };

    try {
        const res = await fetch(api_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        });

        if (!res.ok) {
            throw new Error(`Create failed: ${res.status}`);
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
            method: "DELETE"
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


async function incPriority(id,increase) {
    console.log("Patching id :",id)
    try{
        const res = await fetch(`${api_url}/${id}/priority`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                action: increase ? "increase" : "decrease",
            })
        });

        if (!res.ok) {
            throw new Error(`Update failed: ${res.status}`);
        }

        await fetchtodo();

    }catch(err){
        console.log(err)
    }
}

