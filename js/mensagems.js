function obterMensagens() {
    fetch('https://app-p2-aab7c7fdddb8.herokuapp.com/mensagens')
      .then(response => response.json())
      .then(data => {
        exibirMensagens(data);
      })
      .catch(error => console.error('Erro ao buscar mensagens:', error));
  }
  
  function exibirMensagens(mensagens) {
    const tabela = document.getElementById("tabelaMensagens").getElementsByTagName('tbody')[0];
  
    mensagens.forEach(mensagemObj => {
      const row = tabela.insertRow();
  
      const cellNome = row.insertCell(0);
      const cellEmail = row.insertCell(1);
      const cellMensagem = row.insertCell(2);
  
      cellNome.textContent = mensagemObj.nome;
      cellEmail.textContent = mensagemObj.email;
      cellMensagem.textContent = mensagemObj.mensagem;
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    obterMensagens();
  });
  