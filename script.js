const exit_adicionar = document.getElementById("exit-adicionar");
const div_adicionar = document.getElementById("adicionar-div");
const bttn_adicionar = document.getElementById("button-add");
const lista_livros = document.getElementById("lista-livros");
const nav_bar = document.getElementById("nav");
const bttn_enviar = document.getElementById("envia");
const date = document.getElementById('data-publi');

var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

if(day < 10){
  day = '0' + day;
}

if(month < 10){
  month = '0' + month;
}

today = year + '-' + month + '-' + day;

date.setAttribute('max', today);

div_adicionar.style.display = "none";

bttn_adicionar.addEventListener("click", function () {
  div_adicionar.style.display = "";
  lista_livros.style.display = "none";
  nav_bar.style.display = "none";
});

exit_adicionar.addEventListener("click", function () {
  div_adicionar.style.display = "none";
  lista_livros.style.display = "";
  nav_bar.style.display = "";
});

bttn_enviar.addEventListener("click", function(event) {
  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;
  const pags = document.getElementById('num_pags').value;
  const genero = document.getElementById('genero').value;
  const final = document.getElementById('final').value;
  const data = document.getElementById('data-publi').value;
  const resumo = document.getElementById('resumo').value;
  if(titulo.trim() === '' || autor.trim() === '' || autor.trim() === ''  || resumo.trim() === ''){
    alert('Preencha todos os dados do livro');
  }else {
    alert('Livro adicionado com sucesso!!')
    titulo.value = '';
  }
});


