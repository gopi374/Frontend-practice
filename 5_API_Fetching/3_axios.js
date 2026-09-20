let api = "https://jsonplaceholder.typicode.com/todos";
let api1 = "https://jsonplaceholder.typicode.com/users/1";

// async function getUser() {

//   const response = await axios.get(api1);

//   console.log(response.data.name);
// }

// getUser();

const ul = document.querySelector("#list");
const btn = document.querySelector("#btn1");

function addTaskToList(data) {
  for (let i = 180; i < data.length; i++) {
    const li = document.createElement("li");
    li.innerText = data[i].title;
    ul.appendChild(li);
  }
}

btn.addEventListener("click", () => {
  axios
    .get(api)
    .then((res) => {
    //   let data = res.data;
      console.log(res.data);
      addTaskToList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
