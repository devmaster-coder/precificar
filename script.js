document.addEventListener("DOMContentLoaded", () => {
  const nomeInput = document.getElementById("nome");
  if (nomeInput) {
    nomeInput.value = localStorage.getItem("nome") || "";
  }

  const custoBaseInput = document.getElementById("custoBase");
  if (custoBaseInput) {
    custoBaseInput.value = localStorage.getItem("custoProducao") || "";
  }
});

function calcular() {
  const custo = parseFloat(document.getElementById("custoBase").value);
  const impostos = parseFloat(document.getElementById("impostos").value) || 0;
  const lucro = parseFloat(document.getElementById("lucro").value) || 0;

  const precoFinal = custo * (1 + impostos / 100) * (1 + lucro / 100);
  const lucroReal = precoFinal - custo * (1 + impostos / 100);

  document.getElementById("resultado").innerHTML = `
    <p><strong>Preço sugerido:</strong> R$ ${precoFinal.toFixed(2)}</p>
    <p><strong>Lucro estimado:</strong> R$ ${lucroReal.toFixed(2)}</p>
  `;
}

function irParaCusto() {
  const nome = document.getElementById("nome").value;
  localStorage.setItem("nome", nome);
  window.location.href = "custo.html";
}

function paginaInicial() {
  window.location.href = "/pagina_inicial/index.html";
}