import { Contacto } from "./classContacto.js";

//crear variables

const modalAdminContacto = new bootstrap.Modal (document.querySelector("#modalContacto"));
const btnAgregarContacto = document.querySelector('.btn-primary');
const formRegistrarContacto = document.querySelector('form');
const nombre = document.querySelector('#nombre'); 
const apellido = document.querySelector('#apellido'); 
const apodo = document.querySelector('#apodo'); 
const email = document.querySelector('#email'); 
const celular = document.querySelector('#celular'); 
const foto = document.querySelector('#foto'); 
const direccion = document.querySelector('#direccion'); 
const listaContactos = [];
//funciones
const mostrarModal = ()=>{
    modalAdminContacto.show()
}

const crearContacto = (e)=>{
    e.preventDefault();
    const contactoNuevo = new Contacto(
      undefined,
      nombre.value,
      apellido.value,
      apodo.value,
      direccion.value,
      celular.value,
      email.value,
      foto.value
    );
    console.log(contactoNuevo);
    listaContactos.push(contactoNuevo)
    console.log(listaContactos)
    limpiarFormulario();
}

const limpiarFormulario = ()=>{
    formRegistrarContacto.reset();
}

//agregar los manejadores de eventos
btnAgregarContacto.addEventListener('click', mostrarModal);
formRegistrarContacto.addEventListener('submit', crearContacto);
