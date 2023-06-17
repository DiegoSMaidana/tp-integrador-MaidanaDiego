//queryselector es porque en html tengo una clase y tambien puedo llamar id anteponiendo #
const formularioUsuarios = document.querySelector(".formularioUsuarios")
// evento submit una vez activa la funcion se recarga o refresca
// creo la variable contenedorusuarios
const contenedorusuarios = document.querySelector("#contenedorusuarios")
//declaro otra constante para
const usuarios = []
//creo una funcion rederizar usuarios o sea mostrar usuarios

const renderizarUsuarios = () =>{
for(const usuario of usuarios)
contenedorusuarios.innerHTML += `
<div class="card">
    <h1>Usuario</h1>
    <div class="info">
        <p>Nombre:${usuario.nombre}</p>
        <p>Email: ${usuario.email}</p>
        <p>Contraseña: ${usuario.contrasena}</p>
        <p>Provincia: ${usuario.provincia}</p>
    </div>
</div>`
}
//Variable nuevo usuarios
const nuevo_dato = () =>{
contenedorusuarios.innerHTML = ``
}

formularioUsuarios.addEventListener("submit", (event) => {
//para que no se recargue la pagina
event.preventDefault()
//asi tomamos y podemos mostrar por consolo por ejemplo de las provincias
console.log(formularioUsuarios.provincia.value)

// deberemos arma run bucle por ej for para recorrer los datos pero antes hay que armar un array de objetos
//para agregar objetos a un arreglo uso push ({ llave porque es un objeto})
usuarios.push({
nombre: formularioUsuarios.nombre.value,
email: formularioUsuarios.email.value,
contrasena: formularioUsuarios.contrasena.value,
provincia: formularioUsuarios.provincia.value
})
nuevo_dato()
renderizarUsuarios()

})