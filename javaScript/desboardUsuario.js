const rotas = [];

function adicionarRota(cep, rua, numero, bairro, cidade) {
  const rota = { cep, rua, numero, bairro, cidade };
  rotas.push(rota);
  console.log("Rota adicionada:", rota);
}
function salvarRota() {
  const cep = document.getElementById("cepRota").value;
  const rua = document.getElementById("ruaRota").value;
  const numero = document.getElementById("numeroRota").value;
  const bairro = document.getElementById("bairroRota").value;
  const cidade = document.getElementById("cidadeRota").value;
  adicionarRota(cep, rua, numero, bairro, cidade);
  document.getElementById("cepRota").value = "";
  document.getElementById("ruaRota").value = "";
  document.getElementById("numeroRota").value = "";
  document.getElementById("bairroRota").value = "";
  document.getElementById("cidadeRota").value = "";
  atualizarListaRotas();
}
