// objeto
const gerenciadorDeRota = {
  // array
  rotas: [],
  //  método para adicionar rota
  adicionarRota: function () {
    const bntAdiconarRota = document.getElementById("bntAdiconarRota");
    if (bntAdiconarRota) {
      (bntAdiconarRota.addEventListene,
        "click",
        function (e) {
          e.preventDefault();
          const novasRotas = {
            cep: document.getElementById("cep").value,
            rua: document.getElementById("rua").value,
            numero: document.getElementById("numero").value,
            bairro: document.getElementById("bairro").value,
            cidade: document.getElementById("cidade").value,
          };
          gerenciadorDeRota.rotas.push(novasRotas);
          console.log(gerenciadorDeRota.rotas);
          alert("Rota adicionada com sucesso!");
        });
    }
  },
};
