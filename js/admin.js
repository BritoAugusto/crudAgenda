import { Contacto } from "./classContacto.js";

//crear variables

const modalAdminContacto = new bootstrap.Modal(
  document.querySelector("#modalContacto")
);
const btnAgregarContacto = document.querySelector(".btn-primary");
const formRegistrarContacto = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const apodo = document.querySelector("#apodo");
const email = document.querySelector("#email");
const celular = document.querySelector("#celular");
const foto = document.querySelector("#foto");
const direccion = document.querySelector("#direccion");
const listaContactos = JSON.parse(localStorage.getItem("agendaKey")) || [];
const tbody = document.querySelector("tbody");

//funciones
const mostrarModal = () => {
  modalAdminContacto.show();
};

const crearContacto = (e) => {
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
  listaContactos.push(contactoNuevo);
  console.log(listaContactos);
  limpiarFormulario();
  guardarEnLocalStorage();
};

const limpiarFormulario = () => {
  formRegistrarContacto.reset();
};

const guardarEnLocalStorage = () => {
  localStorage.setItem("agendaKey", JSON.stringify(listaContactos));
};

const cargaInicialTablaContactos = () => {
  if (listaContactos.length !== 0) {
    listaContactos.map((contacto) => dibujarFila(contacto));
  }
};
const dibujarFila = (contacto) => {
  tbody.innerHTML += `<tr>
                <td>${contacto.id}</td>
                <td>${contacto.nombre}</td>
                <td>${contacto.apellido}</td>
                <td>${contacto.email}</td>
                <td>${contacto.celular}</td>
                <td>
                  <button class="btn btn-warning mb-3">
                    <i class="bi bi-pencil-square"></i>Editar
                  </button>
                  <button class="btn btn-danger mb-3">
                    <i class="bi bi-trash"></i>Borrar
                  </button>
                  <button class="btn btn-info mb-lg-3">
                    <i class="bi bi-eye-fill"></i>Ver
                  </button>
                </td>
              </tr>
    `;
};

//agregar los manejadores de eventos
btnAgregarContacto.addEventListener("click", mostrarModal);
formRegistrarContacto.addEventListener("submit", crearContacto);
cargaInicialTablaContactos();
