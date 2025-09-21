document.addEventListener("DOMContentLoaded", function () {
    // ⚡️ Inicialización de Supabase
    const SUPABASE_URL = 'https://ifypvveqqshujwlniuox.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmeXB2dmVxcXNodWp3bG5pdW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMzYxNzEsImV4cCI6MjA3MzcxMjE3MX0.0VyJAqAeEUo6S4p3WWvBXdCAjxKvzm5Ste2CKxjcX7Y';
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // 🎥 Carrusel de imágenes
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide(n) {
        slides.forEach(slide => {
            slide.style.opacity = "0";
        });
        if (slides[n]) {
            slides[n].style.opacity = "1";
        }
    }

    function changeSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    showSlide(index);
    setInterval(changeSlide, 2500);

    // 📝 Registro del formulario
    document.querySelector(".register-form").addEventListener("submit", async function (event) {
        event.preventDefault();

        const nombre = document.querySelector("#nombre").value.trim();
        const apellidoPaterno = document.querySelector("#apellido-paterno").value.trim();
        const apellidoMaterno = document.querySelector("#apellido-materno").value.trim();
        const ci = document.querySelector("#ci").value.trim();
        const celular = document.querySelector("#celular").value.trim();
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();

        const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        const soloNumeros = /^[0-9]+$/;
        const correoGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        const passwordSegura = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!soloLetras.test(nombre)) {
            alert("⚠️ El nombre solo puede contener letras.");
            return;
        }
        if (!soloLetras.test(apellidoPaterno)) {
            alert("⚠️ El apellido paterno solo puede contener letras.");
            return;
        }
        if (!soloLetras.test(apellidoMaterno)) {
            alert("⚠️ El apellido materno solo puede contener letras.");
            return;
        }
        if (!soloNumeros.test(ci) || ci.length !== 7) {
            alert("⚠️ El C.I. debe contener exactamente 7 dígitos.");
            return;
        }
        if (!soloNumeros.test(celular) || celular.length !== 8) {
            alert("⚠️ El celular debe contener exactamente 8 dígitos.");
            return;
        }
        if (!correoGmail.test(email)) {
            alert("⚠️ Debes ingresar un correo válido de @gmail.com.");
            return;
        }
        if (!passwordSegura.test(password)) {
            alert("⚠️ La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y un carácter especial (@$!%*?&).");
            return;
        }

        // 🔥 Paso 1: Registrar al usuario de forma segura con Supabase Auth
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    nombre: nombre,
                    apellido_paterno: apellidoPaterno,
                    apellido_materno: apellidoMaterno,
                    ci: ci,
                    celular: celular,
                    correo_electronico: email
                }
            }
        });

        if (error) {
            console.error("Error en la autenticación:", error);
            if (error.message.includes("Email already registered")) {
                alert("⚠️ Error: El correo ya está registrado.");
            } else {
                alert("Hubo un error en la autenticación. Por favor, inténtalo de nuevo.");
            }
            return;
        }
        
        localStorage.setItem("usuarioEmail", email);
        alert("✅ Registro exitoso. ¡Bienvenido!");
        window.location.href = "index.html";
    });

    // 🔹 Restricción en tiempo real: máximo 8 caracteres en contraseña
    document.querySelector("#password").addEventListener("input", function () {
        if (this.value.length > 8) {
            this.value = this.value.substring(0, 8);
        }
    });

    // 👁️ Función para ver y ocultar la contraseña (nueva adición)
    window.togglePassword = function() {
        const passwordInput = document.getElementById('password');
        const eyeOpenIcon = document.getElementById('eye-open');
        const eyeClosedIcon = document.getElementById('eye-closed');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            if (eyeOpenIcon) eyeOpenIcon.style.display = 'none';
            if (eyeClosedIcon) eyeClosedIcon.style.display = 'block';
        } else {
            passwordInput.type = 'password';
            if (eyeOpenIcon) eyeOpenIcon.style.display = 'block';
            if (eyeClosedIcon) eyeClosedIcon.style.display = 'none';
        }
    };
    
    // ↩️ Función para el botón "Cancelar"
    const cancelButton = document.querySelector(".cancel-btn");
    if (cancelButton) {
        cancelButton.addEventListener("click", function() {
            window.location.href = "inicio_sesion.html";
        });
    }
});