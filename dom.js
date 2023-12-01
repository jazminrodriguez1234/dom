let titulo1 = document.querySelector('#p')
let titulo2 = document.querySelector('#i')

let Imagen = document.querySelector('#img')

let Boton = document.querySelector('#boton')

let Cambio = false;
Boton.onclick = function () {
    if (Cambio == false) {
        Imagen.src = './recursos/cortesDeVaca2.jpg'
        titulo2.innerText = 'De qué cuarto principal salen los cortes de carne argentinos?'
        titulo1.innerText = 'De esta forma el carnicero extrae de cada parte de la media res los principales cortes como se muestra en la imagen anterior. '
        Boton.innerText = 'Volver'
        Cambio = true
    } else {
        Imagen.src = './recursos/cortesDeVaca.jpg'
        titulo2.innerText = 'División de la media res en cuartos principales'
        titulo1.innerText = 'A partir de esta división de la media res en las tres principales secciones, el carnicero comienza a despostar para extraer cada uno de los cortes a partir del manual tradicional de cortes argentinos'
        Boton.innerText = 'Continuar'
        Cambio = false
    }

}