
//extrar el parametro de la url
console.log(window.location.search)

const paramId = new URLSearchParams(window.location.search).get('id');
console.log(paramId);

const listaContactos = JSON.parse(localStorage.getItem("agendaKey")) || [];

const contactoBuscado = listaContactos.find((contacto)=> contacto.id === paramId);
console.log(contactoBuscado);
const card = document.querySelector('.row');
console.log(card)


// const cargaInicialVerContacto = () => {
//   if (contactoBuscado.length !== 0) {

//     dibujarContacto(contactoBuscado);
//   }
// }

const dibujarContacto = (contactoBuscado)=>{
card.innerHTML += ` <div class="col-md-4">
      <img src="${contactoBuscado.foto}" class="img-fluid rounded-start card-img-top" alt="${contactoBuscado.nombre} ${contactoBuscado.apellido}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${contactoBuscado.nombre} ${contactoBuscado.apellido}</h5>
        <ul class="list-unstyled">
            <li>Apodo: ${contactoBuscado.apodo}</li>
            <li>Celular: ${contactoBuscado.celular}</li>
            <li>Email: ${contactoBuscado.email}</li>
            <li>Direccion: ${contactoBuscado.direccion}</li>
        </ul>
      </div>
    </div>
  </div>
`;
}
dibujarContacto(contactoBuscado);