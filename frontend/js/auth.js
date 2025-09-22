
//  LOGIN /////////////////////7
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const usuario = document.getElementById("loginNombre").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario, password })
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("rol", data.rol);

    if (data.rol == 1) {
      // Administrador → redirige al panel
      window.location.href = "panel.html";
    } else {
      alert("Bienvenido cliente: " + usuario);
      bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
    }
  } else {
    alert(data.error || "Error al iniciar sesión");
  }
});

// REGISTRO ////////////// 
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const usuario = document.getElementById("registerNombre").value;
  const password = document.getElementById("registerPassword").value;

  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario, password })
  });

  const data = await res.json();

  if (res.ok) {
    alert("Usuario registrado correctamente");
    bootstrap.Modal.getInstance(document.getElementById("registerModal")).hide();
  } else {
    alert(data.error || "Error al registrarse");
  }
});