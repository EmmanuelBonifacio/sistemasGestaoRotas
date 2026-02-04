// Array para armazenar as rotas adicionadas
const rotas = [];
const rotasOtimizadas = [];

const bntAdiconarRota = document.getElementById("bntAdiconarRota");

if (bntAdiconarRota) {
  bntAdiconarRota.addEventListener("click", function (e) {
    e.preventDefault();

    const novasRotas = {
      cep: document.getElementById("cep").value,
      rua: document.getElementById("rua").value,
      numero: document.getElementById("numero").value,
      bairro: document.getElementById("bairro").value,
      cidade: document.getElementById("cidade").value,
    };
    rotas.push(novasRotas);
    const bntRotaEficiente = document.getElementById("bntRotaEficiente");
    if (bntRotaEficiente) {
      bntRotaEficiente.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }
    rotasOtimizadas.push(rotas);
    console.log(rotas);
    alert("Rota adicionada com sucesso!");
    console.log(rotasOtimizadas);
    alert("Funcionalidade de gerar rota mais eficiente em desenvolvimento.");

    // Limpar os campos do formulário após adicionar a rota
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
  });
}
