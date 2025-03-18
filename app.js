let participantes = [];

function agregarAmigo() {
    let nombreInput = document.getElementById("amigo");
    let nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (participantes.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    participantes.push(nombre);
    nombreInput.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    participantes.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Debe haber al menos 2 participantes para hacer el sorteo.");
        return;
    }

    let amigoSecreto = participantes[Math.floor(Math.random() * participantes.length)];
    let resultado = document.getElementById("resultado");

    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultado.classList.remove("hidden");
}
