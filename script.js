const exit_adicionar = document.getElementById("exit-adicionar");
const div_adicionar = document.getElementById("adicionar-div");
const bttn_adicionar = document.getElementById("button-add");
const lista_livros = document.getElementById("lista-livros");
const nav_bar = document.getElementById("nav");

div_adicionar.style.display = "none";

bttn_adicionar.addEventListener("click", function () {
  div_adicionar.style.display = "block";
  lista_livros.style.display = "none";
  nav_bar.style.display = "none";
});

exit_adicionar.addEventListener("click", function () {
  div_adicionar.style.display = "none";
  lista_livros.style.display = "";
  nav_bar.style.display = "";
});
