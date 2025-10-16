// GET

const btnGET = document.getElementById("btnGET");
const container1 = document.getElementById("get-container");

async function gerarFormulario() {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dados = await resposta.json(); // transforma em objeto JS
    console.log(dados);

    // limpa os containers antes de preencher
    container1.innerHTML = "";

    // percorre todos os objetos do array
    for (let i = 0; i < dados.length; i++) {
        const post = document.createElement("div");
        post.classList.add("post");

        const h3title = document.createElement("h3");
        h3title.textContent = dados[i].title;

        const pBody = document.createElement("p");
        pBody.textContent = dados[i].body;

        post.appendChild(h3title);
        post.appendChild(pBody);
        container1.appendChild(post);
    }

  } catch (erro) {
    console.error("Erro ao carregar formulário:", erro);
  }
}

// evento do botão
btnGET.addEventListener("click", gerarFormulario);


// ---------------------------------  POST  ---------------------------------------

const bntPOST = document.getElementById("enviar");
const titulo = document.getElementById("titulo");
const conteudo = document.getElementById("conteudo");
const postContainer = document.getElementById("post-container");


async function enviarPost() {
  try {
    const title = titulo.value.trim();
    const body = conteudo.value.trim();

    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title, body, userID: 1,
      }),
    });

    const dados = await resposta.json();

    const post = document.createElement("div");
    post.classList.add("post");

    const h3title = document.createElement("h3");
    h3title.textContent = dados.title;

    const pBody = document.createElement("p");
    pBody.textContent = dados.body;

    const pID = document.createElement("p");
    pID.textContent = dados.id;

    const pUserId = document.createElement("p");
    pUserId.textContent = dados.userID;


    post.appendChild(h3title);
    post.appendChild(pBody);
    post.appendChild(pID);
    post.appendChild(pUserId);
    postContainer.appendChild(post); 

    
    console.log("post criado", dados);
  } catch (erro){
    console.error("Erro ao enviar post", erro);
  }
}

bntPOST.addEventListener("click", enviarPost);

// -------------------- PUT -------------------------

const getContainer = document.getElementById("get-container2");

async function mostrarFormulario() {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const dados = await resposta.json();
    //console.log(dados);

    const post = document.createElement("div");
    post.classList.add("post");

    const h3title = document.createElement("h3");
    h3title.textContent = dados.title;

    const pBody = document.createElement("p");
    pBody.textContent = dados.body;

    post.appendChild(h3title);
    post.appendChild(pBody);
    getContainer.appendChild(post); 


    } catch (erro){
    console.error("Erro ao alterar post", erro);
  }
}

mostrarFormulario();

const btnPUT = document.getElementById("btnPUT");
const titulo2 = document.getElementById("titulo2");
const conteudo2 = document.getElementById("conteudo2");

async function alterarPost() {
  try {
    const title = titulo2.value.trim();
    const body = conteudo2.value.trim();

    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title, body, userID: 1,
      }),
    });

    const dados = await resposta.json();

    const post = getContainer.querySelector(".post");
    const h3title = post.querySelector("h3");
    const pBody = post.querySelector("p");

    h3title.textContent = dados.title;
    pBody.textContent = dados.body;
    

    
    console.log("post criado", dados);
  } catch (erro){
    console.error("Erro ao enviar post", erro);
  }
}

btnPUT.addEventListener("click", alterarPost);


// ----------------- DELETE -----------------------------------------------

const bntDel = document.getElementById("btnDELETE");
const deleteContainer = document.getElementById("delete-container");

async function deletarPost() {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE"
    });

    if (resposta.ok){
      console.log("Post deletado com sucesso");
      const h3title = document.createElement("h3");
      h3title.textContent = "Post deletado com sucesso!";
      deleteContainer.appendChild(h3title);

    } else {
      console.log("Falha ao deletor o post");
    }

  } catch (erro) {
    console.log("Erro ao deletar post", erro);
  }
}

bntDel.addEventListener("click", deletarPost);
