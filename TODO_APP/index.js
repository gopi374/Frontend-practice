const ul = document.querySelector("#ul");

const btn = document.querySelector("#btn");

const inp = document.querySelector("#inp");

let getapi  = "http://localhost:4000/t/";
let todoapi = "https://localhost:4000/t/todos"
async function getdata(){
  try{
  const res = await fetch(getapi);

  if(!res.ok){
    throw new Error("Error : res is not ok")
  }

  const {todos}= await res.json();

  ul.innerHTML = "";

  todos.forEach(todo => {
      const li = document.createElement("li");
      li.textContent = todo.task; 
      ul.appendChild(li);
    });
  }catch(err){
    console.log("Err in loading todos :"+err)
  };
  
}


btn.addEventListener("click", () => {
    const text = inp.value.trim();
    console.log("Sending:", text);

    if (!text) return;

    try {
        const res = fetch(todoapi, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ task: text })
        });


        if (!res.ok) {
          throw new Error("Failed to save todo");
        }

        inp.value = ""; // Clear input
        getdata();
    } catch (err) {
        console.log(err);
    }
});

// getdata();