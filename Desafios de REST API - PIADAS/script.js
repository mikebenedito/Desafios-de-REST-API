const btn = document.getElementById("btn");
const container1 = document.getElementById("setup");
const container2 = document.getElementById("punchline");

async function gerarPiada() {
  try {
    const resposta = await fetch("https://official-joke-api.appspot.com/random_joke");
    const dados = await resposta.json(); // transforma em objeto JS
    console.log(dados);
    const setupAPI = dados.setup; // pega setup
    const punchlineAPI = dados.punchline; // pega punchline

    // cria elemento <h1>
    const h1Setup = document.createElement("h1");
    h1Setup.textContent  = setupAPI;

    const h1Punchline = document.createElement("h1");
    h1Punchline.textContent  = punchlineAPI;

    // limpa o container e adiciona a nova piada
    container1.innerHTML = "";
    container1.appendChild(h1Setup);
    container2.innerHTML = "";
    container2.appendChild(h1Punchline);

  } catch (erro) {
    console.error("Erro ao carregar piada:", erro);
  }
}

// evento do botão
btn.addEventListener("click", gerarPiada);