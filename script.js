const btn = document.querySelector("#btn");
const body = document.querySelector("#body");

function myFunction() {
  document.body.classList.toggle("dark");
  btn.innerHTML = "changed!";
}
