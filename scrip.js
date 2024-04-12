
//SCRIP CARRITO
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
		document.querySelector('.btn-comprar').classList.remove('hidden');
	}
	

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};
document.querySelector('.btn-comprar').addEventListener('click', () => {
    // Agradecer por la compra
    alert('¡Gracias por su compra!');
    // Limpiar el carrito
    allProducts = [];
    // Mostrar cambios en el carrito
    showHTML();
});

//SCRIP CARRUSEL
$('.carousel').carousel({
	interval: 2500 // tiempo en milisegundos
});
//SCRIP BUSCADOR
var options = ["valvulas", "suspencion", "scanner", "pantete"];
function autocomplete() {
	var input = document.getElementById("searchInput").value.toLowerCase();
	var autocompleteList = document.getElementById("autocompleteList");

	autocompleteList.innerHTML = '';
	options.forEach(function(option) {
		if (option.includes(input)) {
			var listItem = document.createElement("li");
			listItem.textContent = option;
			listItem.onclick = function() {
				document.getElementById("searchInput").value = option;
				searchAndRedirect();
			};
			autocompleteList.appendChild(listItem);
		}
	});
}

// Función para manejar el autocompletado y redireccionamiento
function searchAndRedirect() {
	var searchTerm = document.getElementById("searchInput").value.toLowerCase();

	switch (searchTerm) {
		case "valvulas":
			window.location.href = "auto1.html";
			break;
		case "suspencion":
			window.location.href = "auto2.html";
			break;
		case "scanner":
			window.location.href = "auto3.html";
			break;
		case "pantete":
			window.location.href = "auto4.html";
			break;
		case "juan":
			window.location.href = "mecanico1.html";
			break;
		case "francisco":
			window.location.href = "mecanico2.html";
			break;
		case "ignacio":
			window.location.href = "mecanico3.html";
			break;
			case "jhon":
			window.location.href = "mecanico4.html";
			break;
		default:
			alert("No se encontraron resultados para '" + searchTerm + "'.");
			break;
	}
}