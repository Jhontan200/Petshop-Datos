// Lista simulada de productos
const productos = [
    { nombre: "Complete Perro Adulto Raza Mediana y Grande 20 kg", link: "../productos_perros/alimento1_perro.html" }, //PPERRO
    { nombre: "Hop Perro Adulto Raza Mediana y Grande 21 kg", link: "../productos_perros/alimento2.html" },
    { nombre: "Balanced Perro Adulto Raza Mediana 20 kg", link: "../productos_perros/alimento3.html" },
    { nombre: "Complete Perro Senior 20 kg", link: "../productos_perros/alimento4.html" },
    { nombre: "Balanced Perro Adulto Raza Grande 20 kg", link: "../productos_perros/alimento5.html" },
    { nombre: "Premium Perro Adulto 20 kg", link: "../productos_perros/alimento6.html" },
    { nombre: "Excellent Perro Adulto Formula 20 kg", link: "../productos_perros/alimento7.html" },
    { nombre: "Complete Perro Adulto Raza Pequeña 7,5 kg", link: "../productos_perros/alimento8.html" },
    { nombre: "Agility Perro Adulto 20 kg", link: "../productos_perros/alimento9.html" },
    { nombre: "Balanced Perro Adulto Raza Pequeña 3 kg", link: "../productos_perros/alimento10.html" },
    { nombre: "Lata Agility Perro Sabor Carne 340 gr", link: "../productos_perros/lata1.html" },
    { nombre: "Lata Sieger Perro y Gato Adulto Energy Recovery 340 gr", link: "../productos_perros/lata2.html" },
    { nombre: "Recovery Sieger 340 gr", link: "../productos_perros/lata3.html" },
    { nombre: "Lata Agility Perro Cachorro 340 gr", link: "../productos_perros/lata4.html" },
    { nombre: "Lata Agility Perro Sabor Pollo 340 gr", link: "../productos_perros/lata5.html" },
    { nombre: "Lata Pedigree Perro Cachorro Sabor Carne 340 gr", link: "../productos_perros/lata6.html" },
    { nombre: "Lata Sieger Perro Adulto Salmon y Pollo 340 gr", link: "../productos_perros/lata7.html" },
    { nombre: "Pipeta Perro Power Ultra de 11 a 20 kg", link: "../productos_perros/farmacia1.html" },
    { nombre: "Pastilla Simpárica 10 a 20 kg", link: "../productos_perros/farmacia2.html" },
    { nombre: "Pipeta Perro Power Ultra de 2 a 4 kg", link: "../productos_perros/farmacia3.html" },
    { nombre: "Pipeta Perro Power Ultra de 41 a 60 Kg", link: "../productos_perros/farmacia4.html" },
    { nombre: "Pipeta Perro Power Ultra de 5 a 10 kg", link: "../productos_perros/farmacia5.html" },
    { nombre: "Pastilla Simparica 40 a 60 kg", link: "../productos_perros/farmacia6.html" },
    { nombre: "Pastilla Simparica 20 a 40 kg", link: "../productos_perros/farmacia7.html" },
    { nombre: "Pastilla Bravecto 10 a 20 kg", link: "../productos_perros/farmacia8.html" },
    { nombre: "Pastillas Power Gold Hasta 10 kg 3 Meses Duración", link: "../productos_perros/farmacia9.html" },
    { nombre: "Pastilla Bravecto 20 a 40 kg", link: "../productos_perros/farmacia10.html" },
    { nombre: "Comedero Bebedero Con Tolva 15L/700g", link: "../productos_perros/accesorio1.html" },
    { nombre: "Périodico de Juguete para Perro de Vinilo", link: "../productos_perros/accesorio2.html" },
    { nombre: "Colchón Cordura 1 Irresistibles 60CM/42CM", link: "../productos_perros/accesorio3.html" },
    { nombre: "Frisbee de Plástico Para Entrenamiento", link: "../productos_perros/accesorio4.html" },
    { nombre: "Collares Nylon N2/35cm", link: "../productos_perros/accesorio5.html" },
    { nombre: "Pelota de Goma", link: "../productos_perros/accesorio6.html" },
    { nombre: "Bebedero Automático 5 Litros", link: "../productos_perros/accesorio7.html" },
    { nombre: "Escalera Scala Steps Gris", link: "../productos_perros/accesorio8.html" },
    { nombre: "Comedero Bebedero Acero 15 cm", link: "../productos_perros/accesorio9.html" },
    { nombre: "Bolsitas Higiénicas 3 Unidades", link: "../productos_perros/accesorio10.html" },
    { nombre: "Excellent Gato Adulto Pollo y Arroz 3 kg", link: "../productos_gatos/alimento1.html" }, //GATOS
    { nombre: "Hop Gato Kitten 7,5 kg", link: "../productos_gatos/alimento2.html" },
    { nombre: "Premium Gato Adulto 7,5 kg", link: "../productos_gatos/alimento3.html" },
    { nombre: "Complete Gato Adulto 15 kg", link: "../productos_gatos/alimento4.html" },
    { nombre: "Agility Gato Adulto 10 kg", link: "../productos_gatos/alimento5.html" },
    { nombre: "Royal Canin Gato Kitten 15 kg", link: "../productos_gatos/alimento6.html" },
    { nombre: "Balanced Gato Kitten 2 kg", link: "../productos_gatos/alimento7.html" },
    { nombre: "Cat Chow Adultos Carne y Pollo 8 kg", link: "../productos_gatos/alimento8.html" },
    { nombre: "Nutrique Gato Senior Adulto 7 Años Mantenimiento 2 kg", link: "../productos_gatos/alimento9.html" },
    { nombre: "Balanced Natural Recipe Gato Adulto Cordero 15 kg", link: "../productos_gatos/alimento10.html" },
    { nombre: "Lata Agility Gato Sabor Merluza 340gr", link: "../productos_gatos/lata1.html" },
    { nombre: "Lata Agility Gato Pollo 340 gr", link: "../productos_gatos/lata2.html" },
    { nombre: "Lata Agility Gato Sabor Carne 340 gr", link: "../productos_gatos/lata3.html" },
    { nombre: "Lata Agility Gato Kitten 340 gr", link: "../productos_gatos/lata4.html" },
    { nombre: "Lata Whiskas Sabor Carne 340 gr", link: "../productos_gatos/lata5.html" },
    { nombre: "Lata Whiskas Gatito 340 gr", link: "../productos_gatos/lata6.html" },
    { nombre: "Lata Whiskas Gato Sabor Pollo 340 gr", link: "../productos_gatos/lata7.html" },
    { nombre: "Pipeta Frontline Plus para Gato", link: "../productos_gatos/farmacia1.html" },
    { nombre: "Pipeta Fipro para Gato", link: "../productos_gatos/farmacia2.html" },
    { nombre: "Antiparasitario Basken Suspensión 15 ml", link: "../productos_gatos/farmacia3.html" },
    { nombre: "Collar Tea 327 Para Gatos", link: "../productos_gatos/farmacia4.html" },
    { nombre: "Pipeta Frontline Spot para Gato", link: "../productos_gatos/farmacia5.html" },
    { nombre: "Juguete para Gato Catnip", link: "../productos_gatos/accesorio1.html" },
    { nombre: "Pelota Sisal con Plumas", link: "../productos_gatos/accesorio2.html" },
    { nombre: "Rascador Tubo Alfombra Cascabel", link: "../productos_gatos/accesorio3.html" },
    { nombre: "Pelota Inteligente Beepaw Speed-E", link: "../productos_gatos/accesorio4.html" },
    { nombre: "Rascador RB Rueda 20 cm", link: "../productos_gatos/accesorio5.html" },
    { nombre: "Ratita Hilo Sisal", link: "../productos_gatos/accesorio6.html" },
    { nombre: "Puntero Láser", link: "../productos_gatos/accesorio7.html" },
    { nombre: "Casita Iglú", link: "../productos_gatos/accesorio8.html" },
    { nombre: "Pelota para Gato con Cascabel", link: "../productos_gatos/accesorio9.html" },
    { nombre: "Langosta 10 cm", link: "../productos_gatos/accesorio10.html" },
    { nombre: "Naturaliss Cobaya Adulta 1,81 Kg Cunipic", link: "../productos_roedores/alimento1.html" }, //ROEDORES
    { nombre: "Naturaliss Cobaya junior 1,81 Kg Cunipic", link: "../productos_roedores/alimento2.html" },
    { nombre: "Naturaliss Chinchilla & Degu 1,81 Kg Cunipic", link: "../productos_roedores/alimento3.html" },
    { nombre: "Naturaliss Hámster & Jerbo 500 gr Cunipic", link: "../productos_roedores/alimento4.html" },
    { nombre: "Vet Line Intestinal para Cobayas 1,4 Kg Cunipic", link: "../productos_roedores/alimento5.html" },
    { nombre: "Vet Line Intestinal para Pequeños Roedores 1,4 Kg Cunipic", link: "../productos_roedores/alimento6.html" },
    { nombre: "Vet Line Respiratory para Cobayas 1,4 Kg Cunipic", link: "../productos_roedores/alimento7.html" },
    { nombre: "Vet Line Skin Support para Cobayas 1,4 Kg Cunipic", link: "../productos_roedores/alimento8.html" },
    { nombre: "Maderitas de Avellano con Zanahoria Naturaliss", link: "../productos_roedores/alimento9.html" },
    { nombre: "Maderitas de Avellano con Perejil Naturaliss", link: "../productos_roedores/alimento10.html" },
    { nombre: "Savic Bebedero para Conejos y roedores Biba", link: "../productos_roedores/accesorio1.html" },
    { nombre: "Trixie Puente Flexible Natural Living", link: "../productos_roedores/accesorio2.html" },
    { nombre: "Jr Farm Túnel de Heno para Roedores", link: "../productos_roedores/accesorio3.html" },
    { nombre: "Living World Rueda metálica para Hámster", link: "../productos_roedores/accesorio4.html" },
    { nombre: "Trixie Disco para Pequeños Roedores", link: "../productos_roedores/accesorio5.html" },
    { nombre: "Trixie Tunel Roedores Natural Living", link: "../productos_roedores/accesorio6.html" },
    { nombre: "Ferplast Tubo Curvo FPI 4810 para Hámsters", link: "../productos_roedores/accesorio7.html" },
    { nombre: "Freedog Noria de madera", link: "../productos_roedores/accesorio8.html" },
    { nombre: "Yagu Casa para Hámster", link: "../productos_roedores/accesorio9.html" },
    { nombre: "Nayeco Caseta Roedores Village", link: "../productos_roedores/accesorio10.html" },
    { nombre: "Alimentación Súper Premium para Agapornis Cunipic", link: "../productos_aves/alimento1.html" }, //AVES
    { nombre: "Alimentación Súper Premium para Canarios Cunipic", link: "../productos_aves/alimento2.html" },
    { nombre: "Alimentación Súper Premium para Jilgueros y Silvestres 1 Kg Cunipic", link: "../productos_aves/alimento3.html" },
    { nombre: "Alimentación Súper Premium para Loros", link: "../productos_aves/alimento4.html" },
    { nombre: "Alimentación Súper Premium para Ninfas Cunipic", link: "../productos_aves/alimento5.html" },
    { nombre: "Alimentación Súper Premium para Periquitos Cunipic", link: "../productos_aves/alimento6.html" },
    { nombre: "Alimentación Súper Premium para Tropicales 1 Kg Cunipic", link: "../productos_aves/alimento7.html" },
    { nombre: "Barritas Snack Deluxe de semillas y frutos secos para loros 130 gr Cunipic", link: "../productos_aves/alimento8.html" },
    { nombre: "Barritas Snack Deluxe mix de frutas para canarios y diamantes 60 gr Cunipic", link: "../productos_aves/alimento9.html" },
    { nombre: "Barritas Snack Deluxe de semillas y frutas citrícas para periquitos 60 gr Cunipic", link: "../productos_aves/alimento10.html" },
    { nombre: "Arquivet Jaula Piacenza", link: "../productos_aves/accesorio1.html" },
    { nombre: "Voltrega Jaula para pájaros", link: "../productos_aves/accesorio2.html" },
    { nombre: "Arquivet Jaula Nueva Venezia", link: "../productos_aves/accesorio3.html" },
    { nombre: "Arquivet Jaula Nueva Lugano", link: "../productos_aves/accesorio4.html" },
    { nombre: "Ferplast Jaula Giulietta para Pájaros", link: "../productos_aves/accesorio5.html" },
    { nombre: "Trixie Transportin Pájaros", link: "../productos_aves/accesorio6.html" },
    { nombre: "Karlie Flamingo para Pájaros", link: "../productos_aves/accesorio7.html" },
    { nombre: "Trixie Juguete Madera Con Cuerda", link: "../productos_aves/accesorio8.html" },
    { nombre: "Trixie Pelota Mimbre con Cuerda de Sisal", link: "../productos_aves/accesorio9.html" },
    { nombre: "Trixie Madera para Mordisquear", link: "../productos_aves/accesorio10.html" },
    { nombre: "Vivanimals Escamas para peces de agua fría", link: "../productos_peces/alimento1.html" }, //PECES
    { nombre: "Vivanimals Escamas para peces tropicales", link: "../productos_peces/alimento2.html" },
    { nombre: "TetraMin Escamas para peces Ornamentales", link: "../productos_peces/alimento3.html" },
    { nombre: "Tetra Goldfish Escamas para peces", link: "../productos_peces/alimento4.html" },
    { nombre: "Sera Vipagran Granulos para peces", link: "../productos_peces/alimento5.html" },
    { nombre: "JBL Holiday Bloques de Comida para peces", link: "../productos_peces/alimento6.html" },
    { nombre: "JBL Novopleco Pastillas para peces de fondo", link: "../productos_peces/alimento7.html" },
    { nombre: "Sera Shrimps Nature Alimento para gambas", link: "../productos_peces/alimento8.html" },
    { nombre: "Sera Pond Mix Royal alimento para peces", link: "../productos_peces/alimento9.html" },
    { nombre: "Sera Goldy Gran Nature Alimento para peces de agua fría", link: "../productos_peces/alimento10.html" },
    { nombre: "Laguna Bomba Max Flo Sumergible 600/2200", link: "../productos_peces/accesorio1.html" },
    { nombre: "Sera Siporax Pond Algenstop Professional", link: "../productos_peces/accesorio2.html" },
    { nombre: "Marina Red de Malla Fina Blanca para Acuarios", link: "../productos_peces/accesorio3.html" },
    { nombre: "Croci Comedero Aut Deluxe Lcd", link: "../productos_peces/accesorio4.html" },
    { nombre: "Eheim Display 5 Comedero Automático", link: "../productos_peces/accesorio5.html" },
    { nombre: "Fluval PF2 Alimentador Programable para Peces", link: "../productos_peces/accesorio6.html" },
    { nombre: "Sandimas Mini Calentador Acuario", link: "../productos_peces/accesorio7.html" },
    { nombre: "Sera Termocalentadores para Acuario", link: "../productos_peces/accesorio8.html" },
    { nombre: "Freedog Fish Tank (Pecera)", link: "../productos_peces/accesorio9.html" },
    { nombre: "Sera Contenedor De Cría", link: "../productos_peces/accesorio10.html" }
];

const searchBar = document.getElementById("searchBar");
const searchModal = document.getElementById("searchModal");
const resultsList = document.getElementById("resultsList");

searchBar.addEventListener("input", () => {
    ejecutarBusqueda(); // Llama a la función de búsqueda
});

function ejecutarBusqueda() {
    const query = searchBar.value.trim().toLowerCase();
    resultsList.innerHTML = "";

    if (query === "") {
        searchModal.classList.add("hidden");
        searchModal.style.pointerEvents = "none"; // Bloquea interacción al ocultar
        return;
    }

    const resultados = productos
        .filter(producto => producto.nombre.toLowerCase().includes(query))
        .slice(0, 10); // Solo los primeros 10 resultados

    if (resultados.length === 0) {
        resultsList.innerHTML = "<li>No se encontraron resultados.</li>";
    } else {
        resultados.forEach(producto => {
            const li = document.createElement("li");
            li.textContent = producto.nombre;
            li.addEventListener("click", () => {
                window.location.href = producto.link;
            });
            resultsList.appendChild(li);
        });
    }

    searchModal.classList.remove("hidden");
    searchModal.style.pointerEvents = ""; // Restablece interacción al mostrar
}

// Manejo de clics para cerrar el modal y reactivar búsqueda
document.addEventListener("click", (event) => {
    const modal = document.getElementById("searchModal");

    if (!modal.contains(event.target) && event.target !== searchBar) {
        modal.classList.add("hidden");
        modal.style.pointerEvents = "none"; // Bloquea interacción al ocultar
    } else if (modal.classList.contains("hidden") && event.target === searchBar) {
        ejecutarBusqueda(); // Llama a la búsqueda al reabrir el modal
    }
});

function closeModal() {
    searchModal.classList.add("hidden");
}
