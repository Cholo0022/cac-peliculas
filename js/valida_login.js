document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    // Expresión regular para validar el correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Expresión regular para validar la contraseña: al menos 8 caracteres alfanuméricos
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Elementos para mostrar mensajes de error
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    // Limpiar mensajes de error anteriores
    emailError.textContent = "";
    passwordError.textContent = "";

    if (!emailRegex.test(email)) {
      event.preventDefault(); // Previene el envío del formulario
      emailError.textContent =
        "Por favor, ingresa un correo electrónico válido.";
    }

    if (!passwordRegex.test(password)) {
      event.preventDefault(); // Previene el envío del formulario
      passwordError.textContent =
        "Por favor, ingresa una contraseña alfanumérica de al menos 8 caracteres.";
    }

    // Si la validación es exitosa, redirige al usuario a index.html
    if (emailRegex.test(email) && passwordRegex.test(password)) {
      window.location.href = "index.html";
    }
  });
