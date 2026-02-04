// Array para armazenar as rotas adicionadas
const rotas = [];

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
    console.log(rotas);
  });
}
