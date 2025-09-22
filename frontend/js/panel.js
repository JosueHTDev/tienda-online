const API_URL = "https://api-tienda-online-production.up.railway.app/api";
const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "index.html";
}

// --- LOGOUT ---
document.getElementById("btnLogout").addEventListener("click", () => {
  localStorage.removeItem("token");
  localStorage.removeItem("rol");
  window.location.href = "index.html";
});

/* 
   CRUD PRODUCTOS ///////////////7
*/
async function cargarProductos() {
  const res = await fetch(`${API_URL}/productos`);
  const productos = await res.json();
  const tabla = document.getElementById("tablaProductos");
  tabla.innerHTML = "";

  productos.forEach(p => {
    tabla.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.nombre}</td>
        <td>S/${p.precio}</td>
        <td>${p.categoria}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editarProducto(${p.id})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${p.id})">Eliminar</button>
        </td>
      </tr>`;
  });

  // llenar select en imágenes
  const selectProd = document.getElementById("imagenProducto");
  selectProd.innerHTML = "";
  productos.forEach(p => {
    selectProd.innerHTML += `<option value="${p.id}">${p.nombre}</option>`;
  });
}

document.getElementById("productoForm").addEventListener("submit", async e => {
  e.preventDefault();
  const id = document.getElementById("productoId").value;
  const body = {
    nombre: document.getElementById("productoNombre").value,
    precio: document.getElementById("productoPrecio").value,
    categoria_id: document.getElementById("productoCategoria").value
  };
  console.log(body);
  const url = id ? `${API_URL}/productos/${id}` : `${API_URL}/productos`;
  const method = id ? "PUT" : "POST";

  const res = await fetch(url, {
    method, headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    body: JSON.stringify(body)
  });
  if (res.ok) {
    bootstrap.Modal.getInstance(document.getElementById("productoModal")).hide();
    cargarProductos();
  }
});

async function editarProducto(id) {
  const res = await fetch(`${API_URL}/productos/${id}`);
  const p = await res.json();
  document.getElementById("productoId").value = p.id;
  document.getElementById("productoNombre").value = p.nombre;
  document.getElementById("productoPrecio").value = p.precio;
  document.getElementById("productoCategoria").value = p.id_categoria;
  new bootstrap.Modal(document.getElementById("productoModal")).show();
}

async function eliminarProducto(id) {
  if (!confirm("¿Eliminar producto?")) return;
  await fetch(`${API_URL}/productos/${id}`, { method: "DELETE", headers: { "Authorization": `Bearer ${token}` } });
  cargarProductos();
}

/* 
   CRUD CATEGORIAS //////////// 
*/
async function cargarCategorias() {
  const res = await fetch(`${API_URL}/categorias`);
  const cats = await res.json();
  const tabla = document.getElementById("tablaCategorias");
  tabla.innerHTML = "";

  cats.forEach(c => {
    tabla.innerHTML += `
      <tr>
        <td>${c.id}</td>
        <td>${c.nombre}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editarCategoria(${c.id}, '${c.nombre}')">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="eliminarCategoria(${c.id})">Eliminar</button>
        </td>
      </tr>`;
  });

  // llenar select de productos
  const select = document.getElementById("productoCategoria");
  select.innerHTML = "";
  cats.forEach(c => {
    select.innerHTML += `<option value="${c.id}">${c.nombre}</option>`;
  });
}

document.getElementById("categoriaForm").addEventListener("submit", async e => {
  e.preventDefault();
  const id = document.getElementById("categoriaId").value;
  const body = { nombre: document.getElementById("categoriaNombre").value };
  const url = id ? `${API_URL}/categorias/${id}` : `${API_URL}/categorias`;
  const method = id ? "PUT" : "POST";

  const res = await fetch(url, {
    method, headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    body: JSON.stringify(body)
  });
  if (res.ok) {
    bootstrap.Modal.getInstance(document.getElementById("categoriaModal")).hide();
    cargarCategorias();
  }
});

function editarCategoria(id, nombre) {
  document.getElementById("categoriaId").value = id;
  document.getElementById("categoriaNombre").value = nombre;
  new bootstrap.Modal(document.getElementById("categoriaModal")).show();
}

async function eliminarCategoria(id) {
  if (!confirm("¿Eliminar categoría?")) return;
  await fetch(`${API_URL}/categorias/${id}`, { method: "DELETE", headers: { "Authorization": `Bearer ${token}` } });
  cargarCategorias();
}

/* 
   CRUD IMÁGENES ////////// */
async function cargarImagenes() {
  const res = await fetch(`${API_URL}/productos`);
  const productos = await res.json();
  const tabla = document.getElementById("tablaImagenes");
  tabla.innerHTML = "";

  for (let p of productos) {
    const detalle = await fetch(`${API_URL}/productos/${p.id}`);
    const full = await detalle.json();
    if (full.imagenes) {
      full.imagenes.forEach(img => {
        tabla.innerHTML += `
          <tr>
            <td>${img.id}</td>
            <td>${p.nombre}</td>
            <td class="truncate-cell">${img.url}</td>
            <td><img src="${img.url}" width="80"></td>
            <td>
            <button class="btn btn-sm btn-warning" onclick="modificarImagen(${img.id})">Modificar</button>
              <button class="btn btn-sm btn-danger" onclick="eliminarImagen(${img.id})">Eliminar</button>
            </td>
          </tr>`;
      });
    }
  }
}


document.getElementById("imagenForm").addEventListener("submit", async e => {
  e.preventDefault();
  const body = {
    producto_id: document.getElementById("imagenProducto").value,
    url: document.getElementById("imagenUrl").value
  };
  console.log(body);
  const res = await fetch(`${API_URL}/imagenes`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    body: JSON.stringify(body)
  });
  if (res.ok) {
    bootstrap.Modal.getInstance(document.getElementById("imagenModal")).hide();
    cargarImagenes();
  }
});

async function eliminarImagen(id) {
  if (!confirm("¿Eliminar imagen?")) return;
  await fetch(`${API_URL}/imagenes/${id}`, { method: "DELETE", headers: { "Authorization": `Bearer ${token}` } });
  cargarImagenes();
}

async function modeficarImagen(id) {
  if (!confirm("¿Modificar imagen?")) return;
  await fetch(`${API_URL}/imagenes/${id}`, { method: "UPDATE", headers: { "Authorization": `Bearer ${token}` } });
  cargarImagenes();
}


//   INICIALIZACIÓN //////////////

cargarProductos();
cargarCategorias();
cargarImagenes();
