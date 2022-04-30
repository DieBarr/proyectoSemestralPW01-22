var titulo = document.getElementById("titulo");
var imagen = document.getElementById("imagen_adj");
var desc = document.getElementById("desc_post");

var textPrevia = document.getElementById("text_vp");
var imgPrevia = document.getElementById("img_vp");
var descPrevia = document.getElementById("desc_vp");

const post_form = document.getElementById("post_form");

post_form.addEventListener("submit", e=>{
    e.preventDefault();

    localStorage.setItem("imagen_data", imagen);

    textPrevia.innerHTML = titulo.value;
    imgPrevia.src = imagen.value;
    descPrevia.innerHTML = desc.value;
});