

async function generarPerfil () {
    let response = await fetch("https://randomuser.me/api");

    if (response.ok) { 
    let json = await response.json();
    console.log(json.results[0])
    crearPerfil(json.results[0])
   
    } else {
    alert("Error-HTTP: " + response.status);
    }
};
function crearPerfil(persona)
{
    let contenido = [persona.email, persona.phone, persona.location.country]

    //contenedor
    let contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = ""
    //imagen
    let imagen = document.createElement("img")
    imagen.className = "imagen"
    imagen.src = persona.picture.large
    contenedor.append(imagen)

    //nombre
    let nombre = document.createElement("h1")
    nombre.innerHTML = persona.name.first + " " + persona.name.last
    contenedor.append(nombre)
    //edad
    let edad = document.createElement("span")
    edad.className = "edad"
    edad.innerHTML = persona.dob.age
    contenedor.append(edad)

    //Espacio
    let texto = document.createElement("div")
    texto.className = "texto"
    texto.innerHTML = "&nbsp;"
    contenedor.append(texto)

    //iconos
    let iconos = document.createElement("div")
    iconos.className = "iconos"

    //Correo
    let correo = document.createElement("span")
    correo.classList = ["material-symbols-outlined icono"]
    correo.innerHTML = "mail"
    iconos.append(correo)

    //Telefono
    let telefono = document.createElement("span")
    telefono.classList = ["material-symbols-outlined icono"]
    telefono.innerHTML = "phone_in_talk"
    iconos.append(telefono)

    //pais
    let pais = document.createElement("span")
    pais.classList = ["material-symbols-outlined icono"]
    pais.innerHTML = "flag"
    iconos.append(pais)

    contenedor.append(iconos)

    Array.from(document.getElementsByClassName("icono")).forEach(
        function(element, index) {
            element.addEventListener("mouseover", ()=>{
                texto.innerHTML = contenido[index]
            })
            element.addEventListener("mouseout", ()=>{
                texto.innerHTML = "&nbsp;"
            })
        }
    );
}
generarPerfil()

