let main = document.getElementById('main');
let a = "";

let arr = ["29", "28", "s5", "s7","s1","s2","s9","s13","s17","b3"];

for (let i = 1; i <= 45; i++) {
    let r = Math.floor(Math.random() * arr.length);
    a += `
        <div class="card">
            <img src="${arr[r]}.jpg" alt="pokemon">
        </div>
    `;
}

main.innerHTML = a;