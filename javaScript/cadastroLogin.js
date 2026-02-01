// Cadastro de Usuário sao armazenados em um Array
const listaUsuarios = [
  {
    nome: "Teste",
    email: "teste.@gmail.com",
    senha: "123",
    tipoConta: "usuario",
  },
];

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
  document.getElementById("bntLogin").addEventListener("click", validarLogin);
  const emailExistente = listaUsuarios.some(
    (usuario) => usuario.email === email,
    (senha) => usuario.senha === senha,
  );

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

function validarLogin() {
  const emailLogin = document.getElementById("emailLogin").value;
  const senhaLogin = document.getElementById("senhaLogin").value;
  const usuarioEncontrado = listaUsuarios.find(
    (usuario) => usuario.email === emailLogin && usuario.senha === senhaLogin,
  );
  let usuarioInput = emailLogin;
  let senhaInput = senhaLogin;
  if (usuarioEncontrado) {
    alert("Login bem-sucedido!");
    console.log("Usuário logado:", usuarioEncontrado);
  } else {
    alert("Email ou senha incorretos. Tente novamente.");
  }
}
