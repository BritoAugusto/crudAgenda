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
  //cargar los datos de la tabla
  if (listaContactos.length !== 0) {
    //dibujar fila
    listaContactos.map((contacto) => dibujarFila(contacto));
  }

  window.borrarContacto = (id) => {
    Swal.fire({
      title: "¿Estás seguro de borrar el contacto?",
      text: "No puedes revertir porsteriormente este proceso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#7066E0",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //agregar la logica para borrar
        console.log(id);
        //1-Buscar en que posicion del array esta el objeto que tiene el id
        const posicionContacto = listaContactos.findIndex(
          (contacto) => contacto.id === id
        );
        console.log(posicionContacto);
        //2-borrar el elemento de la posicion encontrada
        listaContactos.splice(posicionContacto,1);
        //3-actualizar el localStorage
        guardarEnLocalStorage();
       //4-actualizar tabla de contactos
       console.log(tbody.children[posicionContacto])
       tbody.removeChild(tbody.children[posicionContacto])

        Swal.fire({
          title: "Contacto Borrado",
          text: "El contacto seleccionado fue borrado correctamente",
          icon: "success",
        });
      }
    });
  };
};

window.verContacto = (id)=>{
  window.location.href = "/pages/detalleContacto.html?id=" +id;
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
                  <button class="btn btn-danger mb-3" onclick="borrarContacto('${contacto.id}')">
                    <i class="bi bi-trash"></i>Borrar
                  </button>
                  <button class="btn btn-info mb-lg-3" onclick="verContacto('${contacto.id}')">
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
