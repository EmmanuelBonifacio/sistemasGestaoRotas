const rotas = [];
const otmizadas = [];
// Adicionar rota otimizadas ao array
function otmizadas(cep, rua, numero, bairro, cidade) {
  const otmizadas = { cep, rua, numero, bairro, cidade };
  rotas.push(otmizadas);
}
// Salvar rotas  no localStorage
function salvarRotas() {
  localStorage.setItem("rotasOtmizadas", JSON.stringify(rotas));
  console.log("Rotas otimizadas salvas com sucesso!", rotas);
  document.getElementById("cep").value = "";
  document.getElementById("rua").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
}
document
  .getElementById("adicionarRota")
  .addEventListener("click", adcionarRota);
