const listaContactos = JSON.parse(localStorage.getItem("agendaKey")) || [];
const grilla = document.querySelector(".row");
const cargaInicialTablaContactos = () => {
  if (listaContactos.length !== 0) {
    listaContactos.map((contacto) => dibujarFila(contacto));
  }
};

window.verMas = (id) => {
  window.location.href = "/pages/detalleContacto.html?id=" + id;
};

const dibujarFila = (contacto) => {
  grilla.innerHTML += `<div class="col-md-4 col-lg-3 mb-3">
   <div class="card h-100">
            <img
              src=${contacto.foto}
              class="card-img-top"
              alt=${contacto.apellido} ${contacto.nombre}
            />
  <div class="card-body">
    <h4 class="card-title">${contacto.apellido} ${contacto.nombre} </h4>
    <ul class="list-unstyled">
      <p class="card-text"><i class="bi bi-person-fill"></i> Apodo: ${contacto.apodo}</p>
<p><i class="bi bi-telephone-fill"></i> Celular: ${contacto.celular}</p>
    </ul>
     <div class="card-footer text-body-secondary text-end">
                <button class="btn btn-primary" onclick="verMas('${contacto.id}')">Ver mas...</button>
              </div>
</div>
`;
};

cargaInicialTablaContactos();
