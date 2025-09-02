// Mostrar usuario logueado en index
document.addEventListener("DOMContentLoaded", () => {
  const userInfo = document.getElementById("userInfo");
  const authButtons = document.getElementById("authButtons");
  const usernameDisplay = document.getElementById("usernameDisplay");

  const usuario = localStorage.getItem("usuario");

  if (usuario) {
    authButtons.classList.add("hidden");
    userInfo.classList.remove("hidden");
    usernameDisplay.textContent = `👋 Hola, ${usuario}`;
  }

  // Cargar categorías y productos solo en index
  if (document.getElementById("productosList")) {
    cargarCategorias();
    cargarProductos();
  }
});

// Cargar categorías
async function cargarCategorias() {
  try {
    const res = await fetch(`${API_URL}/categorias`);
    const categorias = await res.json();

    const categoriasMenu = document.getElementById("categoriasMenu");
    categoriasMenu.innerHTML = "";

    categorias.forEach(cat => {
      const li = document.createElement("li");
      li.innerHTML = `<button onclick="filtrarPorCategoria(${cat.id}, '${cat.nombre}')" 
                        class="w-full text-left px-3 py-2 rounded-lg hover:bg-indigo-100">${cat.nombre}</button>`;
      categoriasMenu.appendChild(li);
    });
  } catch (err) {
    console.error("Error cargando categorías:", err);
  }
}

// Cargar todos los productos
async function cargarProductos() {
  try {
    const res = await fetch(`${API_URL}/productos`);
    const productos = await res.json();

    mostrarProductos(productos);
  } catch (err) {
    console.error("Error cargando productos:", err);
  }
}

// Filtrar por categoría
async function filtrarPorCategoria(id, nombre) {
  try {
    const res = await fetch(`${API_URL}/productos/categoria/${id}`);
    const productos = await res.json();

    document.getElementById("subtituloCategoria").textContent = nombre;
    mostrarProductos(productos);
  } catch (err) {
    console.error("Error filtrando productos:", err);
  }
}

// Mostrar todos los productos
function mostrarTodos() {
  document.getElementById("subtituloCategoria").textContent = "Todos los productos";
  cargarProductos();
}

// Renderizar productos
function mostrarProductos(productos) {
  const productosList = document.getElementById("productosList");
  productosList.innerHTML = "";

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "bg-gray-50 rounded-xl shadow p-4 hover:shadow-lg transition";
    card.innerHTML = `
      <img src="${prod.imagen || "https://via.placeholder.com/150"}" class="w-full h-40 object-cover rounded-lg mb-2">
      <h3 class="font-bold text-lg">${prod.nombre}</h3>
      <p class="text-gray-600">S/ ${prod.precio}</p>
      <button onclick="verDetalle(${prod.id})" class="mt-2 bg-indigo-600 text-white px-3 py-1 rounded-lg">Ver detalle</button>
    `;
    productosList.appendChild(card);
  });
}

// Ver detalle de un producto
async function verDetalle(id) {
  try {
    const res = await fetch(`${API_URL}/productos/${id}`);
    const prod = await res.json();

    const detalle = document.getElementById("detalleProducto");
    detalle.innerHTML = `
      <img src="${prod.imagen || "https://via.placeholder.com/200"}" class="w-full h-40 object-cover rounded-lg mb-2">
      <h3 class="font-bold text-lg">${prod.nombre}</h3>
      <p class="text-gray-600 mb-2">S/ ${prod.precio}</p>
      <p class="text-sm text-gray-500">${prod.descripcion || "Sin descripción"}</p>
    `;
  } catch (err) {
    console.error("Error mostrando detalle:", err);
  }
}
