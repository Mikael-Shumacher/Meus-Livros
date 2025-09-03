const exit_adicionar = document.getElementById("exit-adicionar");
const div_adicionar = document.getElementById('adicionar-div');
const bttn_adicionar = document.getElementById('button-add');

div_adicionar.style.display = 'none';

bttn_adicionar.addEventListener('click', function() {
    div_adicionar.style.display = 'block';
});

exit_adicionar.addEventListener('click', function() {
    div_adicionar.style.display = 'none';
});