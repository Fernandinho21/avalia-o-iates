const nome = document.getElementById("nome")
const email = document.getElementById("email")
const mensagem = document.getElementById("msg")
const form = document.getElementById("form");

form.addEventListener("submit", (ev) => {
    ev.preventDefault(); 

    const userMsg = {
        name: nome.value ,     
        email: email.value,    
        mensagem: mensagem.value 
    };

    inserirMensagem(userMsg);

    console.log(userMsg); 

    form.reset(); 
});

console.log(1)