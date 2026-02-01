// Utiliza localStorage para persistir usuários
function getUsuarios() {
  const usuarios = localStorage.getItem("usuarios");
  if (usuarios) {
    return JSON.parse(usuarios);
  }
  // Usuário padrão para teste
  return [
    {
      nome: "Teste",
      email: "teste@gmail.com",
      senha: "123",
      tipoConta: "usuario",
    },
  ];
}

function salvarUsuarios(lista) {
  localStorage.setItem("usuarios", JSON.stringify(lista));
}

// Cadastro
const btnCadastrar = document.getElementById("bntCadastrar");
if (btnCadastrar) {
  btnCadastrar.addEventListener("click", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome")?.value;
    const email = document.getElementById("email")?.value;
    const senha = document.getElementById("senha")?.value;
    const confirmarSenha = document.getElementById("confirmarSenha")?.value;
    const tipoConta = document.getElementById("tipoConta")?.value || "usuario";
    if (!nome || !email || !senha || !confirmarSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }
    let listaUsuarios = getUsuarios();
    const emailExistente = listaUsuarios.some(
      (usuario) => usuario.email === email,
    );
    if (emailExistente) {
      alert("E-mail já cadastrado!");
      return;
    }
    const novoUsuario = {
      nome,
      email,
      senha,
      tipoConta,
    };
    listaUsuarios.push(novoUsuario);
    salvarUsuarios(listaUsuarios);
    alert("Cadastro realizado com sucesso!");
    limparFormularioCadastro();
  });
}

function limparFormularioCadastro() {
  if (document.getElementById("nome"))
    document.getElementById("nome").value = "";
  if (document.getElementById("email"))
    document.getElementById("email").value = "";
  if (document.getElementById("senha"))
    document.getElementById("senha").value = "";
  if (document.getElementById("confirmarSenha"))
    document.getElementById("confirmarSenha").value = "";
  if (document.getElementById("tipoConta"))
    document.getElementById("tipoConta").value = "";
}

// Login
const btnLogin = document
  .getElementById("bntLogin")
  ?.querySelector(".login-btn");
if (btnLogin) {
  btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    const emailLogin = document.getElementById("email")?.value;
    const senhaLogin = document.getElementById("password")?.value;
    const listaUsuarios = getUsuarios();
    const usuarioEncontrado = listaUsuarios.find(
      (usuario) => usuario.email === emailLogin && usuario.senha === senhaLogin,
    );
    if (usuarioEncontrado) {
      alert("Login bem-sucedido!");
      redirecionarPorTipoConta(usuarioEncontrado.tipoConta);
    } else {
      alert("Email ou senha incorretos. Tente novamente.");
    }
    // Função para redirecionar conforme o tipo de conta
    function redirecionarPorTipoConta(tipoConta) {
      if (tipoConta === "usuario") {
        window.location.href = "/paginasHtml/paginaDesboardUsuario.html";
      } else if (tipoConta === "empresa") {
        window.location.href = "";
      } else if (tipoConta === "adm") {
        window.location.href = "";
      } else {
        alert("Tipo de conta desconhecido. Contate o suporte.");
      }
    }
  });
}
