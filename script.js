const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");
const btnCopiarTexto = document.querySelector("#btnCopiarTexto");
const popup = document.querySelector("#popup");



campo_texto.addEventListener("input", function() {
    this.value = this.value.toLowerCase();
});

const matriz_code = [
    ["e", "enter"], // indice 0
    ["i", "imes"], // indice 1
    ["a", "ai"], // indice 2
    ["o", "ober"], // indice 3
    ["u", "ufat"], // indice 4
];

function btnEncriptar(){
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function encriptar(fraseEncriptada){
    for (let i=0; i < matriz_code.length; i++){
        if (fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar(){
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function desencriptar(fraseDesencriptada){
    for (let i=0; i < matriz_code.length; i++){
        if (fraseDesencriptada.includes(matriz_code[i][0])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
    }
    return fraseDesencriptada;
}

btnCopiarTexto.addEventListener("click", function() {
    // Cambiar el texto del botón a "Texto copiado"
    btnCopiarTexto.innerText = "Texto copiado";

    // Seleccionar el texto del campo de mensaje
    campo_mensaje.select();
    campo_mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto seleccionado al portapapeles
    navigator.clipboard.writeText(campo_mensaje.value)
    .then(() => {
        console.log('Texto copiado al portapapeles');
        
        // Restaurar el texto original del botón después de 1 segundo
        setTimeout(function() {
            btnCopiarTexto.innerText = "Copiar texto";
        }, 800);
    })
    .catch(err => {
        console.error('Error al copiar texto: ', err);
    });
});
