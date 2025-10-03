const btn = document.getElementById("btn");
const container = document.getElementById("imagem");

async function carregarGato() {
  try {
    const resposta = await fetch("https://api.thecatapi.com/v1/images/search");
    const dados = await resposta.json(); // transforma em objeto JS
    const imagemUrl = dados[0].url; // pega a url da imagem

    // cria elemento <img>
    const img = document.createElement("img");
    img.src = imagemUrl;
    img.width = 300;

    // limpa o container e adiciona a nova imagem
    container.innerHTML = "";
    container.appendChild(img);
  } catch (erro) {
    console.error("Erro ao carregar gato:", erro);
  }
}

// evento do botão
btn.addEventListener("click", carregarGato);
