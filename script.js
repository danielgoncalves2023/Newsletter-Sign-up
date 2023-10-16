const pageCadastro = document.getElementById('container');
const pageSucesso = document.getElementById('container_sucesso');
var displayGrid; // Desktop
var displayFlex; // Mobile

function inscreverNewsletter(event) {
    event.preventDefault();

    const novoEmail = document.getElementById('email_cadastro').value;
    const emailCadastrado = document.getElementById('emailCadastrado');
    emailCadastrado.innerHTML = novoEmail;
    
    if (pageCadastro.style.display == 'grid') {
        displayGrid = true;
    } else {
        displayFlex = true;
    }

    pageCadastro.style.display = 'none';
    pageSucesso.style.display = 'flex';
}

function fechar() {
    if (displayGrid == true) {
        pageCadastro.style.display = 'grid';
    } else if (displayFlex == true) {
        pageCadastro.style.display = 'flex';
    }

    pageSucesso.style.display = 'none';

    novoEmail = "";
}