
document.getElementById("form").addEventListener("submit", async function login(event) {

    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const objLoginSenha = { email, senha };

    const validacao = await validarUsuario(objLoginSenha);

    if (validacao) {
        window.location.href = 'mensagens.html';
    } else {
        alert('E-mail e Senha inválidos');
    }
});

