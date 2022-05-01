//Declarando de variables
var titulo = document.getElementById("titulo");
var imagen = document.getElementById("imagen_adj");
var desc = document.getElementById("desc_post");

var text_vista = document.getElementById("vista_p");

//Declarando variable del formulario
const post_form = document.getElementById("post_form");

//Ocultar texto de "Vista Previa"
text_vista.style.display = 'none';

//Accion al pulsar submit
post_form.addEventListener("submit", e => {
    e.preventDefault();

    //Condicional para que el Titulo no tenga más de 100 caracteres
    if (titulo.value.length > 100) {
        alert("El Titulo no puede tener más de 100 caracteres");
    } else {
        if (imagen.value != "") {
            document.getElementById("img_vp").innerHTML = imagen.value;
        }
        mostrar();
    }
});

function mostrar() {
    text_vista.style.display = 'block';
    document.getElementById("text_vp").innerHTML = titulo.value;
    document.getElementById("desc_vp").innerHTML = desc.value;
    document.getElementById("com_area").innerHTML = "<h5>Comentarios:</h5><textarea type='text'"
}