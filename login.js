function mostrarCadastro() {
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastro").style.display = "block";
}

function mostrarLogin() {
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function verificarTipo() {
    const tipo = document.querySelector('input[name="tipo"]:checked');
    const empresaContainer = document.getElementById("empresa-container");

    if (!tipo) return;

    if (tipo.value === "Funcionário" || tipo.value === "Dono de empresa") {
        empresaContainer.style.display = "block";
    } else {
        empresaContainer.style.display = "none";
        document.getElementById("empresa").value = "";
    }
}

function cadastrar() {
    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value;

    if (nome !== "Jacinto" || senha !== "1234") {
        alert("Nome ou senha incorretos.");
        return;
    }

    localStorage.setItem("usuarioLogado", "true");

    window.location.href = "index.html";
}

function fazerLogin() {
    const nome = document.getElementById("emailLogin").value.trim();
    const senha = document.getElementById("senhaLogin").value;

    if (nome !== "Jacinto" || senha !== "1234") {
        alert("Nome ou senha incorretos.");
        return;
    }

    localStorage.setItem("usuarioLogado", "true");

    window.location.href = "index.html";
}