export class Contacto {
  #id;
  #nombre;
  #apellido;
  #apodo;
  #direccion;
  #celular;
  #email;
  #foto;
  constructor(id, nombre, apellido, apodo, direccion, celular, email, foto) {
    this.#id = id;
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#apodo = apodo;
    this.#direccion = direccion;
    this.#celular = celular;
    this.#email = email;
    this.#foto = foto;
  }
  get id() {
    return this.#id;
  }

  get nombre() {
    return this.#nombre;
  }

  get apellido() {
    return this.#apellido;
  }

  get apodo() {
    return this.#apodo;
  }

  get direccion() {
    return this.#direccion;
  }

  get celular() {
    return this.#celular;
  }

  get email() {
    return this.#email;
  }

  get foto() {
    return this.#foto;
  }

  set id(value) {
    this.#id = value;
  }

  set nombre(value) {
    this.#nombre = value;
  }

  set apellido(value) {
    this.#apellido = value;
  }

  set apodo(value) {
    this.#apodo = value;
  }

  set direccion(value) {
    this.#direccion = value;
  }

  set celular(value) {
    this.#celular = value;
  }

  set email(value) {
    this.#email = value;
  }

  set foto(value) {
    this.#foto = value;
  }
}
