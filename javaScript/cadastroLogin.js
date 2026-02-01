const listaUsuarios = [];

documen
  .getElementById(bntCadastrar)
  .addEventListener("click", function (event) {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const tipoConta = document.getElementById("tipoConta").value;
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem. Por favor, tente novamente.");
      event.preventDefault();
      return;
    }
  });

const novoUsuario = {
  nome: nome,
  email: email,
  senha: senha,
  tipoConta: tipoConta,
};
listaUsuarios.push(novoUsuario);
console.log("Usuário cadastrado com sucesso:", novoUsuario);
console.log("Lista de usuários:", listaUsuarios);
event.preventDefault();
