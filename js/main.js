const productos = [
    {
        imagen: "../img/convertidor1.webp",
        nombre: "Convertidor FHD - AndroidTV",
        precio: "60000"
    },
    {
        imagen: "../img/convertidor2.webp",
        nombre: "Convertidor 4K - AndroidTV",
        precio: "80000"
    },
    {
        imagen: "../img/controles.webp",
        nombre: "Control remoto universal",
        precio: "15000"
    },
    {
        imagen: "../img/soporte.webp",
        nombre: "Soporte de pared articulado 22 a 65 pulgadas",
        precio: "25000"
    },
    {
        imagen: "../img/camaras.webp",
        nombre: "Combo cámaras x4 FHD + DVR x8",
        precio: "350000"
    },
    {
        imagen: "../img/alarma.webp",
        nombre: "Sistema de alarma - 2 sensores movimiento + 2 de apertura",
        precio: "300000"
    }
];

function imprimirProductosEnHTML(productos) {
	const contenedor = document.getElementById("cards-container");
	for (const producto of productos) {
		const card = document.createElement("div");
		
		card.innerHTML = `
					<img src="${producto.img}"<br>
					<h3>${producto.nombre}</h3><br>
					<button id="${producto.nombre}${producto.id}">Comprar</button>
		`
		
		contenedor.appendChild(card)
		
		const boton = document.getElementById(`${producto.nombre}${producto.id}`)
		
		boton.addEventListener("click", () => agregarAlCarrito(producto) )
	}
}

imprimirProductosEnHTML(productos)