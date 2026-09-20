const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://jsonplaceholder.typicode.com/users/1"
);

xhr.onload = function() {
  const user = JSON.parse(xhr.responseText);

  document.getElementById("data").innerHTML =
    "Name Recieved from API By XHR(): "+"<br>"+user.name;
};

xhr.send();