// Cadastro de Usuário sao armazenados em um Array
const listaUsuarios = [];

document.getElementById("bntCadastrar").addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;
  const tipoConta = document.getElementById("tipoConta").value;
  if (!nome || !email || !senha || !confirmarSenha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const novoUsuario = {
    nome: nome,
    email: email,
    senha: senha,
    tipoConta: tipoConta,
  };
  listaUsuarios.push(novoUsuario);

  console.log("Usuário cadastrado com sucesso:", novoUsuario);
  alert("Cadastro realizado com sucesso!");
  limparFormulario();
  console.log("Lista de usuários:", listaUsuarios);
});
// Função para limpar o formulário após o cadastro
function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("confirmarSenha").value = "";
  document.getElementById("tipoConta").value = "";
}
