const API_URL = "http://localhost:3000/api";

// Cargar categorías
async function cargarCategorias() {
  const res = await fetch(`${API_URL}/categorias`);
  const categorias = await res.json();
  const nav = document.getElementById("categoriasNav");
  nav.innerHTML = "";
  categorias.forEach((cat) => {
    const li = document.createElement("li");
    li.classList.add("nav-item");
    li.innerHTML = `<a href="#" class="nav-link" onclick="cargarProductosPorCategoria(${cat.id})">${cat.nombre}</a>`;
    nav.appendChild(li);
  });
}

// Cargar productos
async function cargarProductos() {
  const res = await fetch(`${API_URL}/productos`);
  const productos = await res.json();
  mostrarProductos(productos);
}

// Cargar productos por categoría
async function cargarProductosPorCategoria(categoriaId) {
  const res = await fetch(`${API_URL}/productos/categoria/${categoriaId}`);
  const productos = await res.json();
  mostrarProductos(productos);
}

// Mostrar productos
function mostrarProductos(productos) {
  const container = document.getElementById("productosContainer");
  container.innerHTML = "";
  productos.forEach((prod) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    card.innerHTML = `
          <div class="card h-100">
            <img src="${
              prod.imagen || "https://via.placeholder.com/150"
            }" class="card-img-top" alt="${prod.nombre}">
            <div class="card-body">
              <h5 class="card-title">${prod.nombre}</h5>
              <p class="card-text">Precio: S/${prod.precio}</p>
              <button class="btn btn-primary" onclick="verDetalle(${
                prod.id
              })">+</button>
            </div>
          </div>
        `;
    container.appendChild(card);
  });
}

// Ver detalle del producto
async function verDetalle(id) {
  const res = await fetch(`${API_URL}/productos/${id}`);
  const prod = await res.json();
  console.log(prod);
  const resImgs = await fetch(`${API_URL}/imagenes/${id}`);
  const imagenes = await resImgs.json();

  const detalle = document.getElementById("detalleProducto");
  detalle.innerHTML = `
        <h5>${prod.nombre}</h5>
        <p><strong>Precio:</strong> S/${prod.precio}</p>
        <p><strong>Categoría:</strong> ${prod.categoria}</p>
        <div class="d-flex flex-wrap">
          ${imagenes
            .map(
              (img) =>
                `<img src="${img.url}" class="img-thumbnail m-1" style="width:100px;">`
            )
            .join("")}
        </div>
      `;
}

// Inicializar
cargarCategorias();
cargarProductos();
