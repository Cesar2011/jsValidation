//eventos de inputs y textarea

const datos = {
    nombre: '', 
    email: '', 
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//evento de submit
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e);

    //validar formulario
    const { nombre, email, mensaje } = datos;
    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    if (nombre === '' || email === '' || mensaje === '') {
        //console.log('Por favor, llena todos los campos para continuar')
        mostrarError('Todos los campos son obligatorios');
        return; //corta la ejecución del código

    } else{
        mostrarMensaje('¡Gracias por contactarnos!')
    }
    
    console.log('Enviando formulario');

})

//muestra un error en pantalla
function mostrarError (mensaje) {

    //crear el elemento html para mostrar el error
    const error = document.createElement('P'); //crear un párrafo
    error.textContent = mensaje; //darle el contenido al párrafo
    error.classList.add('error'); //Añadirle clase para darle estulos con html

    formulario.appendChild(error); //añadir el párrafo al html
    console.log(error);

    //eliminar la notificacion
    setTimeout(() => {

        error.remove();

    }, 3000);

}

//mostrar mensaje de que se envió el correo
function mostrarMensaje(mensaje) {
    const formularioCompleto = document.createElement('P');
    formularioCompleto.textContent = mensaje;
    formularioCompleto.classList.add('formularioCompleto')

    formulario.appendChild(formularioCompleto);
    console.log(formularioCompleto);

    setTimeout(() => {
        formularioCompleto.remove();
    }, 3000);
}

//Mostrar eventos en la consola
function leerTexto(e ){
    datos[e.target.id] = e.target.value;
    console.log(datos);
}
