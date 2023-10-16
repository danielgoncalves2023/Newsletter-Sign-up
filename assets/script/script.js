const pageCadastro = document.getElementById('container');
const pageSucesso = document.getElementById('container_sucesso');
var displayGrid; // Desktop
var displayFlex; // Mobile

function inscreverNewsletter(event) {
    event.preventDefault();

    var novoEmail = document.getElementById('email_cadastro');
    var emailCadastrado = document.getElementById('emailCadastrado');
    emailCadastrado.innerHTML = novoEmail.value;

    // Validação de Email
    if (novoEmail.value.indexOf('@') == -1 || novoEmail.value.indexOf('.') == -1) {
        var textoErroEmail = document.getElementById('erro_email');

        // Aviso email inválido
        textoErroEmail.innerHTML = "Favor digitar um email válido."
        textoErroEmail.style.color = 'red';
        novoEmail.style.color = 'red';
        novoEmail.style.border = '2px solid red';

    } else {
        
    // Transição de página cadastro, para cadastro finalizado
    pageCadastro.style.display = 'none';
    pageSucesso.style.display = 'flex';
    }
}

function fechar() {
    location.reload();
}