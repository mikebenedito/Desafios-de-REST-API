// front_default = imagem
// types = tipo

const btn = document.getElementById("btn");
const input = document.getElementById("input");
const resultado = document.getElementById("resultado");


btn.addEventListener("click", async () => {
  const nome = input.value.trim().toLowerCase(); // pega o nome e deixa minúsculo (a API é case-sensitive)

  if (!nome) {
    resultado.textContent = "Por favor, digite o nome de um Pokémon!";
    return;
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(nome)}`;

  try {
    resultado.textContent = "Buscando...";
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error("Pokémon não encontrado!");
    }

    const dados = await resposta.json();

    // pega o nome e imagem do Pokémon
    const nomePokemon = dados.name;
    const imagemPokemon = dados.sprites.other["official-artwork"].front_default;
    
    // Tipos (array)
    const tipos = dados.types.map(t => t.type.name); // ex: ["electric"] ou ["fire", "flying"]
    const tiposFormatados = tipos.join(" / "); // junta com barra

    // cria elementos no HTML
    const titulo = document.createElement("h2");
    titulo.textContent = nomePokemon.toUpperCase();
    
    const imagem = document.createElement("img");
    imagem.src = imagemPokemon;
    imagem.alt = nomePokemon;
    imagem.width = 200;

    const tipoTexto = document.createElement("h3");
    tipoTexto.textContent = `Tipo: ${tiposFormatados}`;


    // mostra no container
    resultado.innerHTML = "";
    resultado.appendChild(titulo);
    resultado.appendChild(imagem);
    resultado.appendChild(tipoTexto);

  } catch (erro) {
    console.error(erro);
    resultado.textContent = erro.message;
  }
});