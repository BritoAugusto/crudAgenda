import { Contacto } from "./classContacto.js";

//crear variables
const crearContacto = new Contacto(
  undefined,
  "Augusto",
  "Brito",
  "Chino",
  "las talitas",
  "38155564",
  "chino@mail.com",
  "link"
);
const modalAdminContacto = new bootstrap.Modal (document.querySelector("#modalContacto"));
const btnAgregarContacto = document.querySelector('.btn-primary');

//funciones
const mostrarModal = ()=>{
    modalAdminContacto.show()
}


//agregar los manejadores de eventos
btnAgregarContacto.addEventListener('click', mostrarModal)