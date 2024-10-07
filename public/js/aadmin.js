



/* cosas que arreglar:
//proximo codigo TODO
const formularioAgregar = document.forms['#formularioAgregar'];
//Obtengo datos ingresados
formularioAgregar.addEventListener('submit', (Event) => {
    Event.preventDefault();
    let nombre = formularioAgregar.nombre.value;
    let descripcion = formularioAgregar.descripcion.value;
    let precio = formularioAgregar.precio.value;
    let nuevosDatos = {nbr:nombre, desc:descripcion, precio:precio};
    //|-->objeto con los datos del formulario
    let nuevosDatosJson = JSON.stringify(nuevosDatos);
    //console.log(nuevosDatosJson)
});//envia los datos al json
*/