
var pageCadastro = document.getElementById('container');
var pageSucesso = document.getElementById('container_sucesso');
// Coletando input de email cadastrado:
const emailCadastrado = document.querySelector('#email_cadastro');

function submit() {

    // Confirmação de email:
    const confirmacaoEmail = document.getElementById('emailCadastrado');
    // Mostrar email que foi enviado confirmação de cadastro:
    confirmacaoEmail.innerHTML = `${emailCadastrado}`;

    pageCadastro.style.display = 'none';
    pageSucesso.style.display = 'flex';
}

function fechar() {
    pageCadastro.style.display = 'grid';
    pageSucesso.style.display = 'none';
}



document.getElementById('submit').addEventListener("click", submit())