document
  .getElementById("registroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtiene los valores de los campos
    var nombre = document.getElementById("nombreInput").value;
    var apellido = document.getElementById("apellidoInput").value;
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    var fecha = document.getElementById("fechaInput").value;
    var terminos = document.getElementById("terminosInput").checked;

    // Expresión regular para validar el correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Expresión regular para validar la contraseña con al menos 8 caracteres alfanuméricos
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Limpia mensajes de error anteriores
    document.getElementById("nombreError").textContent = "";
    document.getElementById("apellidoError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("fechaError").textContent = "";

    // Valida que ningún campo esté vacío
    if (!nombre.trim()) {
      document.getElementById("nombreError").textContent =
        "Por favor, ingresa tu nombre.";
      return; 
    }

    if (!apellido.trim()) {
      document.getElementById("apellidoError").textContent =
        "Por favor, ingresa tu apellido.";
      return; // Detener la ejecución del script
    }

    if (!emailRegex.test(email.trim())) {
      document.getElementById("emailError").textContent =
        "Por favor, ingresa un correo electrónico válido.";
      return; // Detener la ejecución del script
    }

    if (!passwordRegex.test(password.trim())) {
      document.getElementById("passwordError").textContent =
        "La contraseña debe tener al menos 8 caracteres con letras y números.";
      return; // Detener la ejecución del script
    }

    if (!fecha.trim()) {
      document.getElementById("fechaError").textContent =
        "Por favor, ingresa tu fecha de nacimiento.";
      return; // Detener la ejecución del script
    }

    // Validar que se acepten los términos y condiciones
    if (!terminos) {
      alert("Por favor, acepta los términos y condiciones.");
      return; // Detener la ejecución del script
    }

    // Redirigir al usuario a login.html si todos los campos son válidos
    window.location.href = "login.html";
  });
