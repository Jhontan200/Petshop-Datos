// Asegúrate de poner esto en la parte superior de tu script de pago.
// Reemplaza los placeholders con tu URL y tu clave 'anon' de Supabase
const SUPABASE_URL = 'https://ifypvveqqshujwlniuox.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmeXB2dmVxcXNodWp3bG5pdW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMzYxNzEsImV4cCI6MjA3MzcxMjE3MX0.0VyJAqAeEUo6S4p3WWvBXdCAjxKvzm5Ste2CKxjcX7Y';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener("DOMContentLoaded", () => {
    const resumenContenedor = document.querySelector(".pago-cart-items");
    const totalElemento = document.querySelector(".pago-total");
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    function guardarCarrito() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    function actualizarTotal() {
        const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
        totalElemento.textContent = `Total: Bs. ${total.toLocaleString('es-BO', { minimumFractionDigits: 2 })}`;
    }

    function mostrarResumenCarrito() {
        resumenContenedor.innerHTML = "";

        if (carrito.length === 0) {
            resumenContenedor.innerHTML = "<p>El carrito está vacío.</p>";
            totalElemento.textContent = "Total: Bs. 0,00";
            return;
        }

        carrito.forEach((producto, index) => {
            const item = document.createElement("div");
            item.classList.add("pago-cart-item");

            item.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="pago-img">
                <div class="pago-item-detalles">
                    <h4>${producto.nombre}</h4>
                    <p>Precio: Bs. ${producto.precio.toLocaleString('es-BO', { minimumFractionDigits: 2 })}</p>
                    <div class="pago-controles">
                        <button class="menos" data-index="${index}">-</button>
                        <span>${producto.cantidad}</span>
                        <button class="mas" data-index="${index}">+</button>
                        <button class="eliminar" data-index="${index}">🗑</button>
                    </div>
                    <p>Subtotal: Bs. ${(producto.precio * producto.cantidad).toLocaleString('es-BO', { minimumFractionDigits: 2 })}</p>
                </div>
            `;
            resumenContenedor.appendChild(item);
        });

        actualizarTotal();
    }

    resumenContenedor.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        if (e.target.classList.contains("mas")) {
            carrito[index].cantidad++;
        } else if (e.target.classList.contains("menos")) {
            if (carrito[index].cantidad > 1) carrito[index].cantidad--;
        } else if (e.target.classList.contains("eliminar")) {
            carrito.splice(index, 1);
        }
        guardarCarrito();
        mostrarResumenCarrito();
    });

    document.querySelector(".pago-vaciar").addEventListener("click", () => {
        localStorage.removeItem("carrito");
        carrito = [];
        mostrarResumenCarrito();
    });

    document.querySelector(".pago-finalizar").addEventListener("click", async (e) => {
        // Evita que el formulario se envíe de forma predeterminada
        e.preventDefault();

        const correoGuardado = localStorage.getItem("usuarioEmail");

        if (!correoGuardado) {
            alert("⚠️ Debes iniciar sesión o crear una cuenta antes de finalizar la compra.");
            return;
        }

        if (!validarFormulario()) return;

        // Recolectar datos del formulario para el JSON
        const nombre = document.querySelector("#nombre").value.trim();
        const correo = document.querySelector("#correo").value.trim();
        const direccion = document.querySelector("#direccion").value.trim();
        const telefono = document.querySelector("#telefono").value.trim();
        const departamento = document.querySelector("#departamento").value;
        const metodoPago = document.querySelector("#metodo-seleccionado").value;

        const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

        // Crear el objeto de la orden para la inserción
        const orderData = {
            user_email: correo,
            total_amount: total,
            status: 'Pendiente',
            order_details: {
                productos: carrito,
                cliente: {
                    nombre,
                    direccion,
                    telefono,
                    departamento
                },
                metodo_pago: metodoPago
            }
        };

        // Insertar la orden en la tabla 'ordenes' de Supabase
        const { data, error } = await supabase
            .from('ordenes')
            .insert([orderData]);

        if (error) {
            console.error("Error al guardar la orden:", error);
            alert("Hubo un error al procesar tu compra. Por favor, inténtalo de nuevo.");
        } else {
            // Si la inserción es exitosa, se ejecuta la lógica original
            generarFacturaPDF();
            alert("¡Gracias por tu compra!");

            // Limpiar el carrito y restablecer el formulario
            localStorage.removeItem("carrito");
            carrito = [];
            mostrarResumenCarrito();
            document.querySelector("#pago-form-datos").reset();

            // Quitar el método de pago seleccionado
            document.querySelector("#metodo-seleccionado").value = "";
            document.querySelectorAll('.metodo-img').forEach(img => img.classList.remove('seleccionado'));
        }
    });

    function validarFormulario() {
        const nombre = document.querySelector("#nombre").value.trim();
        const correo = document.querySelector("#correo").value.trim();
        const direccion = document.querySelector("#direccion").value.trim();
        const telefono = document.querySelector("#telefono").value.trim();
        const departamento = document.querySelector("#departamento").value;
        const metodoPago = document.querySelector("#metodo-seleccionado").value; // Cambiado aquí

        // Validación de nombre: solo letras y espacios
        if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
            alert("El campo 'Nombre completo' solo permite letras y espacios.");
            return false;
        }

        // Validación de correo: debe terminar en @gmail.com
        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(correo)) {
            alert("El correo debe ser una dirección válida terminada en @gmail.com.");
            return false;
        }

        // Validación de dirección: no puede estar vacío
        if (direccion === "") {
            alert("Por favor, ingrese la dirección.");
            return false;
        }

        // Validación de teléfono: exactamente 8 dígitos
        if (!/^[0-9]{8}$/.test(telefono)) {
            alert("El campo 'Teléfono' debe contener exactamente 8 dígitos.");
            return false;
        }

        // Validación de departamento: debe seleccionarse uno
        if (departamento === "") {
            alert("Por favor, seleccione un departamento.");
            return false;
        }

        // Validación de método de pago: debe estar seleccionado
        if (!metodoPago) {
            alert("Seleccione un método de pago.");
            return false;
        }

        // Verifica que el carrito no esté vacío
        if (carrito.length === 0) {
            alert("El carrito está vacío.");
            return false;
        }

        return true;
    }

    async function generarFacturaPDF() {
        const { jsPDF } = window.jspdf;

        // Configuración para tamaño carta y orientación horizontal
        const doc = new jsPDF({
            orientation: "landscape", // Horizontal
            unit: "mm",              // Unidades en milímetros
            format: "letter"         // Tamaño carta
        });

        // Agregar el logo desde la carpeta local
        const logo = new Image();
        logo.src = "./imagenes/Logo.png"; // Ruta relativa de la imagen
        doc.addImage(logo, "PNG", 10, 10, 50, 20); // Ajusta posición y tamaño del logo

        const nombre = document.querySelector("#nombre").value.trim();
        const correo = document.querySelector("#correo").value.trim();
        const direccion = document.querySelector("#direccion").value.trim();
        const telefono = document.querySelector("#telefono").value.trim();
        const departamento = document.querySelector("#departamento").value;
        const metodoPago = document.querySelector("#metodo-seleccionado").value;

        // Generar un número de factura aleatorio de 6 dígitos
        const numeroFactura = Math.floor(100000 + Math.random() * 900000);

        // Obtener la fecha y hora actuales
        const fechaHora = new Date();
        const fechaCompra = fechaHora.toLocaleDateString();
        const horaCompra = fechaHora.toLocaleTimeString();

        let y = 40; // Posición inicial en el eje Y
        doc.setFontSize(16);
        doc.text("Factura de Compra", 120, y, { align: "center" }); y += 10;

        // Imprimir número de factura
        doc.setFontSize(12);
        doc.text(`N° de Factura: ${numeroFactura}`, 10, y); y += 7;

        // Imprimir fecha y hora de compra
        doc.text(`Fecha: ${fechaCompra}`, 10, y);
        doc.text(`Hora: ${horaCompra}`, 10, y + 7);
        y += 14;

        doc.text(`Nombre: ${nombre}`, 10, y); y += 7;
        doc.text(`Correo: ${correo}`, 10, y); y += 7;
        doc.text(`Dirección: ${direccion}`, 10, y); y += 7;
        doc.text(`Teléfono: ${telefono}`, 10, y); y += 7;
        doc.text(`Departamento: ${departamento}`, 10, y); y += 7;
        doc.text(`Método de pago: ${metodoPago}`, 10, y); y += 10;

        doc.text("Productos:", 10, y); y += 7;

        // Imprimir productos
        carrito.forEach((producto, i) => {
            doc.text(
                `${i + 1}. ${producto.nombre} - Cant: ${producto.cantidad} - Unit: Bs. ${producto.precio.toLocaleString('es-BO', { minimumFractionDigits: 2 })} - Subtotal: Bs. ${(producto.cantidad * producto.precio).toLocaleString('es-BO', { minimumFractionDigits: 2 })}`,
                10,
                y
            );
            y += 7;
        });

        const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
        y += 5;
        doc.setFontSize(14);
        doc.text(`Total a pagar: Bs. ${total.toLocaleString('es-BO', { minimumFractionDigits: 2 })}`, 10, y);

        // Guardar el archivo con un nombre único
        doc.save(`Factura_${numeroFactura}.pdf`);
    }

    mostrarResumenCarrito();
});

function seleccionarMetodo(metodo) {
    // Elimina la clase "seleccionado" de todas las imágenes
    document.querySelectorAll('.metodo-img').forEach(img => img.classList.remove('seleccionado'));

    // Añade la clase "seleccionado" a la imagen seleccionada
    const imagenSeleccionada = document.getElementById(`opcion-${metodo.toLowerCase()}`);
    if (imagenSeleccionada) {
        imagenSeleccionada.classList.add('seleccionado');
    }

    // Guarda el método seleccionado en el campo oculto
    document.getElementById("metodo-seleccionado").value = metodo;

    // Mensaje de confirmación (opcional para depuración)
    console.log(`Método de pago seleccionado: ${metodo}`);
}


function mostrarModal(id) {
    document.getElementById(id).style.display = 'flex';
}
function cerrarModal(id) {
    document.getElementById(id).style.display = 'none';
}
function confirmarTarjeta() {
    const numTarjeta = document.getElementById('numero-tarjeta').value.trim();
    const codSeguridad = document.getElementById('codigo-seguridad').value.trim();

    if (!/^\d{16}$/.test(numTarjeta)) {
        alert('El número de tarjeta debe tener exactamente 16 dígitos.');
        return;
    }
    if (!/^\d{4}$/.test(codSeguridad)) {
        alert('El código de seguridad debe tener exactamente 4 dígitos.');
        return;
    }

    document.getElementById('metodo-seleccionado').value = 'Tarjeta';
    document.getElementById('opcion-tarjeta').classList.add('seleccionado');
    cerrarModal('modal-tarjeta');
}
function confirmarTransferencia() {
    document.getElementById('metodo-seleccionado').value = 'Transferencia';
    document.getElementById('opcion-transferencia').classList.add('seleccionado');
    cerrarModal('modal-transferencia');
}

function seleccionarMetodo(metodo) {
    document.querySelectorAll('.metodo-img').forEach(img => img.classList.remove('seleccionado'));

    if (metodo === 'Tarjeta') {
        mostrarModal('modal-tarjeta');
    } else if (metodo === 'Transferencia') {
        mostrarModal('modal-transferencia');
        generarQR();
    } else {
        document.getElementById('metodo-seleccionado').value = 'Efectivo';
        document.getElementById('opcion-efectivo').classList.add('seleccionado');
    }
}

function generarQR() {
    const canvas = document.getElementById('qr-canvas');
    const urlImagen = "https://cdn3d.iconscout.com/3d/premium/thumb/pago-completo-8527082-6716481.png?f=webp";
    QRCode.toCanvas(canvas, urlImagen, function (error) {
        if (error) console.error(error);
    });
}