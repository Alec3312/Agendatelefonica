const formulario = document.getElementById('form-container');
const tablaBody = document.getElementById('agenda-body');

let contactos = [];

function agregarContacto() {

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const categoria = document.getElementById('categoria').value;
  
    const nuevoContacto = {
      nombre,
      telefono,
      categoria,
      mensajes: 0,
      llamadas: 0
    };
    contactos.push(nuevoContacto);

    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('categoria').value = 'Familiar';
  
    mostrarContactos();
  }

function mostrarContactos() {
    tablaBody.innerHTML = '';

    contactos.forEach(contacto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${contacto.nombre}</td>
            <td>${contacto.telefono}</td>
            <td>${contacto.categoria}</td>
            <td><button onclick="modificarContador(this, 'mensajes', +1)">+</button> ${contacto.mensajes} <button onclick="modificarContador(this, 'mensajes', -1)">-</button></td>
            <td><button onclick="modificarContador(this, 'llamadas', +1)">+</button> ${contacto.llamadas} <button onclick="modificarContador(this, 'llamadas', -1)">-</button></td>
            <td><button onclick="eliminarContacto(this)">Eliminar</button></td>
        `;
        tablaBody.appendChild(fila);
    });
}

function modificarContador(boton, propiedad, valor) {
    const fila = boton.parentNode.parentNode;
    const indice = Array.from(tablaBody.querySelectorAll('tr')).indexOf(fila);
    contactos[indice][propiedad] += valor;
    mostrarContactos();
}

function eliminarContacto(boton) {
    const fila = boton.parentNode.parentNode;
    const indice = Array.from(tablaBody.querySelectorAll('tr')).indexOf(fila);
    contactos.splice(indice, 1);
    mostrarContactos();
}