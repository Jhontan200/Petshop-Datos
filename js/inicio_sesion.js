document.addEventListener("DOMContentLoaded", function () {
    // ⚡️ Inicialización de Supabase
    const SUPABASE_URL = 'https://ifypvveqqshujwlniuox.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmeXB2dmVxcXNodWp3bG5pdW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMzYxNzEsImV4cCI6MjA3MzcxMjE3MX0.0VyJAqAeEUo6S4p3WWvBXdCAjxKvzm5Ste2CKxjcX7Y';
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // 🔹 Carrusel de imágenes con fade-in
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function changeSlide() {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
        });
        index = (index + 1) % slides.length;
    }

    setInterval(changeSlide, 2500);

    // 🔹 Mostrar/Ocultar contraseña con icono
    const togglePassword = document.getElementById("toggle-password");
    if (togglePassword) {
        togglePassword.addEventListener("click", function () {
            const passwordField = document.getElementById("password");
            const icon = this.querySelector("i");

            if (passwordField.type === "password") {
                passwordField.type = "text";
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            } else {
                passwordField.type = "password";
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            }
        });
    }

    // 🔹 Lógica de inicio de sesión
    document.querySelector(".login-btn").addEventListener("click", async function (event) {
        event.preventDefault(); // Previene el envío del formulario

        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();

        // Validaciones del formulario
        if (!email.endsWith("@gmail.com")) {
            alert("⚠️ Ingresa un correo con @gmail.com.");
            return;
        }
        if (email === "" || password === "") {
            alert("⚠️ No puedes dejar campos vacíos.");
            return;
        }
        if (password.length < 8) {
            alert("⚠️ La contraseña debe tener al menos 8 caracteres.");
            return;
        }

        // 🔥 Paso 1: Iniciar sesión con Supabase Auth
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            console.error("Error en la autenticación:", error);
            alert("⚠️ Error: El correo o la contraseña son incorrectos.");
        } else {
            console.log("Sesión iniciada con éxito:", data);
            
            // ✅ Paso 2: Guardar el email en localStorage
            localStorage.setItem("usuarioEmail", email);
            
            alert("✅ ¡Inicio de sesión exitoso!");
            
            // Redirige al usuario a la página de inicio
            window.location.href = "index.html"; 
        }
    });
});