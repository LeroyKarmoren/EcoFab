document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector(".menu");
    const barra = document.querySelector(".barra-lateral");
    const overlay = document.querySelector(".overlay-menu");

    
    // ABRIR / FECHAR

    menu.addEventListener("click", function (event) {

        event.stopPropagation();

        barra.classList.toggle("aberta");
        overlay.classList.toggle("aberta");

    });


    // CLICAR NO FUNDO ESCURO FECHA

    overlay.addEventListener("click", function () {

        barra.classList.remove("aberta");
        overlay.classList.remove("aberta");

    });


    // CLICAR EM UM LINK FECHA

    const links = barra.querySelectorAll(".menu-sidebar a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            barra.classList.remove("aberta");
            overlay.classList.remove("aberta");

        });

    });

});



/* ================================================= */
/* FORMULÁRIO DE DENÚNCIA */
/* ================================================= */

const formDenuncia = document.getElementById("form-denuncia");

if (formDenuncia) {

    formDenuncia.addEventListener("submit", function (event) {

        event.preventDefault();

        const codigo =
            "#" +
            Math.floor(1000 + Math.random() * 9000);

        alert(
            "Denúncia registrada com sucesso!\n\n" +
            "Código da denúncia: " + codigo
        );

        formDenuncia.reset();

    });

}


/* ================================================= */
/* ASSISTENTE ECOFAB */
/* ================================================= */

const chatBox = document.getElementById("chat-box");
const inputChat = document.getElementById("mensagem-chat");
const botaoChat = document.getElementById("enviar-chat");
const perguntas = document.querySelectorAll(".pergunta-btn");


function adicionarMensagem(texto, tipo) {

    const mensagem = document.createElement("div");

    mensagem.classList.add(
        "mensagem",
        tipo === "usuario"
            ? "mensagem-usuario"
            : "mensagem-ia"
    );

    const nome =
        tipo === "usuario"
            ? "Você"
            : "EcoFab";

    mensagem.innerHTML = `
        <strong>${nome}</strong>
        <p>${texto}</p>
    `;

    chatBox.appendChild(mensagem);

    chatBox.scrollTop =
        chatBox.scrollHeight;
}


function responderIA(pergunta) {

    const texto =
        pergunta.toLowerCase();

    let resposta =
        "Posso ajudar com dúvidas sobre denúncias, reciclagem, resíduos e descarte adequado.";


    if (
        texto.includes("como faço") &&
        texto.includes("denúncia")
    ) {

        resposta =
            "Para fazer uma denúncia, preencha o formulário acima com o tipo de problema, local, data e descrição. Você também pode anexar uma foto ou vídeo.";

    }


    else if (
        texto.includes("o que posso denunciar")
    ) {

        resposta =
            "Você pode registrar problemas relacionados a descarte irregular de resíduos, acúmulo de materiais, poluição, queimadas e outras situações ambientais.";

    }


    else if (
        texto.includes("reciclado")
    ) {

        resposta =
            "Depende do material. Papel, papelão, vidro, metais e diversos tipos de plástico podem ser recicláveis, mas o descarte deve seguir as orientações e a coleta disponível na sua região.";

    }


    else if (
        texto.includes("descartar") ||
        texto.includes("descarte")
    ) {

        resposta =
            "O descarte correto depende do tipo de resíduo. Evite misturar materiais e procure pontos de coleta ou serviços especializados quando necessário.";

    }


    adicionarMensagem(
        resposta,
        "ia"
    );

}


/* ENVIAR MENSAGEM */

function enviarMensagem() {

    const texto =
        inputChat.value.trim();

    if (texto === "") {
        return;
    }

    adicionarMensagem(
        texto,
        "usuario"
    );

    inputChat.value = "";

    setTimeout(function () {

        responderIA(texto);

    }, 500);

}


/* BOTÃO */

if (botaoChat) {

    botaoChat.addEventListener(
        "click",
        enviarMensagem
    );

}


/* ENTER */

if (inputChat) {

    inputChat.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                enviarMensagem();

            }

        }
    );

}


/* PERGUNTAS PRONTAS */

perguntas.forEach(function (botao) {

    botao.addEventListener(
        "click",
        function () {

            const pergunta =
                this.dataset.pergunta;

            adicionarMensagem(
                pergunta,
                "usuario"
            );

            setTimeout(function () {

                responderIA(pergunta);

            }, 500);

        }
    );

});







/* =========================================
   FILTROS DAS METAS
========================================= */

const filtrosMeta =
    document.querySelectorAll(".filtro-meta");

const cardsMeta =
    document.querySelectorAll(".card-meta");


filtrosMeta.forEach(filtro => {

    filtro.addEventListener("click", () => {


        /* REMOVE O ATIVO */

        filtrosMeta.forEach(botao => {

            botao.classList.remove("ativo");

        });


        /* ATIVA O BOTÃO CLICADO */

        filtro.classList.add("ativo");


        /* PEGA A CATEGORIA */

        const categoria =
            filtro.getAttribute("data-filtro");


        /* FILTRA OS CARDS */

        cardsMeta.forEach(card => {

            const status =
                card.getAttribute("data-status");


            if (
                categoria === "todas" ||
                categoria === status
            ) {

                card.classList.remove("oculto");

            } else {

                card.classList.add("oculto");

            }

        });

    });

});




const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        btnTopo.style.display = "flex";
    } else {
        btnTopo.style.display = "none";
    }

});

btnTopo.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});




/* =========================================
   USUÁRIO
========================================= */

const usuarioTopo =
    document.getElementById("usuarioTopo");

const usuarioSidebar =
    document.getElementById("usuarioSidebar");


if (usuarioTopo) {

    usuarioTopo.addEventListener("click", function () {

        window.location.href = "login.html";

    });

}


if (usuarioSidebar) {

    usuarioSidebar.addEventListener("click", function () {

        window.location.href = "login.html";

    });

}


/* =========================================
   MOSTRAR USUÁRIO
========================================= */

function atualizarUsuario() {

    const nomeUsuario =
        localStorage.getItem("nomeUsuario");

    const tipoUsuario =
        localStorage.getItem("tipoUsuario");


    if (nomeUsuario) {

        document.getElementById("nomeSidebar").textContent = nomeUsuario;

        document.getElementById("cargoSidebar").textContent =
            tipoUsuario || "Morador";

    }

}

atualizarUsuario();