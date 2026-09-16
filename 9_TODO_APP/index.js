const ul = document.querySelector("#ul");

const btn = document.querySelector("#btn");

const inp = document.getElementById("inp");

let getapi = "http://localhost:4000/t/";
let todoapi = "http://localhost:4000/t/todos";

async function getdata() {
  try {
    const res = await fetch(getapi);

    if (!res.ok) {
      throw new Error("Error : res is not ok");
    }

    const { todos } = await res.json();

    ul.innerHTML = "";

    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo.task;
      ul.appendChild(li);
    });
  } catch (err) {
    console.log("Err in loading todos :" + err);
  }
}

btnf.addEventListener("click", () => {
  getdata();
});

async function sendData() {
  const text = inp.value.trim();
  console.log("Sending:", text);

  if (!text) return;

  try {
    const res = await fetch(todoapi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: text }),
    });

    if (!res.ok) {
      throw new Error("Failed to save todo");
    } else {
      console.log("Todo Saved");
    }

    inp.value = ""; // Clear input
    await getdata();
  } catch (err) {
    console.log(err);
  }
}
btn.addEventListener("click", sendData);

let ip = document.getElementById("idinp");
let delbtn = document.getElementById("delete");

async function deletetodo() {
  const id = ip.value.trim();
  console.log("given id :", id);
  if (!id) {
    throw new Error("please enter id..");
  }

  try {
    const res = await fetch(`http://localhost:4000/todos/${id}`, {
      method: "Delete",
    });

    if (!res.ok) {
      throw new Error("faild to delete todo !");
    }

    const data = await res.json();
    console.log(data.message);

    inp.value = "";

    getdata();
  } catch (err) {
    console.log(err);
  }
}

delbtn.addEventListener("click", deletetodo);

async function update(id, newtask) {
  try {
    const res = await fetch(`http://localhost:4000/t/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:id,
        task: newtask,
      }),
    });

    if (!res.ok) {
      throw new Error("todo not found");
    }

    const data = await res.json();

    console.log(data);

    await getdata();
  } catch (err) {
    console.log(err);
  }
}

let updatebtn = document.getElementById("update");

updatebtn.addEventListener("click", async () => {
  try {
    const id=document.getElementById("id").value;
    const task = document.getElementById("task").value.trim();
    console.log("Sending :", id, " ", task);

    if (!id || !task) {
      throw new Error("Cannot get newId and newTask ");
      return;
    }
    await update(id, task);
  } catch (error) {
    console.log(error);
  }
});



async function updatepatch(id, newtask) {
  try {
    const res = await fetch(`http://localhost:4000/t/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task:newtask,
      }),
    });

    if (!res.ok) {
      throw new Error("todo not found");
    }

    const data = await res.json();

    console.log(data);

    await getdata();
  } catch (err) {
    console.log(err);
  }
}


let updbtn = document.getElementById("patchBtn")

updbtn.addEventListener("click",async ()=>{
  try{
  const id = document.getElementById("updateId").value;
  const task = document.getElementById("updateTask").value.trim();
  console.log("Sending : ",id," ",task);

  if(!id || !task){
    throw new Error("Cannot find id task");
  }

  await updatepatch(id,task);
}catch(err){
  console.log(err)
}
})