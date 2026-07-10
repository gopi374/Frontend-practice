let url = "https://jsonplaceholder.typicode.com/todos";

const btn = document.querySelector("#btn");
const ul = document.querySelector("#list");

btn.addEventListener("click", () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      ul.innerHTML = "";
      // show first 10 items
      data.slice(0, 10).forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.id}. ${item.title} [${item.completed ? "done" : "todo"}]`;
        ul.appendChild(li);
      });
    })
    .catch((err) => {
      console.error(err);
      ul.innerHTML = "<li>Error loading data</li>";
    });
});