let url = "https://jsonplaceholder.typicode.com/users/1";
async function getUser() {
      const response = await fetch(url);

      const user = await response.json();
      console.log(user)

      document.getElementById("result").innerHTML =
        "Name: " + user.name + "<br>" +
        "Email: " + user.email + "<br>" +
        "City: " + user.address.city;
    }


/*async function getUser() {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  const user = await response.json();

  console.log(user.name);
}

getUser();*/