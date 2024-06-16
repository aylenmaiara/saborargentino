const productos = [
    { ID: 1, Nombre: "La Gaucha", Descripcion: "Carne de res, queso provolone, huevo frito, chimichurri. Incluye papas.", Imagen: "lagaucha.jpg", Precio: 6000 },
    { ID: 2, Nombre: "La Porteña", Descripcion: "Carne de res, jamón, queso cheddar, lechuga, tomate, mayonesa casera. Incluye papas.", Imagen: "laporteña.jpg", Precio: 6000 },
    { ID: 3, Nombre: "La Veggie", Descripcion: "Hamburguesa de espinaca, lechuga, rúcula, cebolla morada. Incluye papas.", Imagen: "laveggie.jpg", Precio: 5000 },
    { ID: 4, Nombre: "La Criolla", Descripcion: "Carne de res, lechuga, mayonesa, cebolla morada, pepinos. Incluye papas.", Imagen: "lacriolla.jpg", Precio: 6000 },
    { ID: 5, Nombre: "La Iguazú", Descripcion: "Carne de res, lechuga, tomate, cascada de queso cheddar. Incluye papas.", Imagen: "laiguazu.jpg", Precio: 6000 },
    { ID: 6, Nombre: "La Río Negro", Descripcion: "Hamburguesa de garbanzos, rúcula, tomate, cebolla morada. Incluye papas.", Imagen: "larionegro.jpg", Precio: 5000 },
    { ID: 7, Nombre: "La Santafesina", Descripcion: "Hamburguesa de remolacha, tomate, lechuga, cebolla morada Incluye papas.", Imagen: "lasantafesina.jpg", Precio: 5000 },
    { ID: 8, Nombre: "La Norteña", Descripcion: "Doble carne de res, doble tomate, cebolla morada, queso cheddar, lechuga. Incluye papas.", Imagen: "lanorteña.jpg", Precio: 6000 },
    { ID: 9, Nombre: "Las Fritas", Descripcion: "Balde de papas fritas con orégano y sal.", Imagen: "lasfritas.jpg", Precio: 3000 },
];


$(document).ready(function () {

    const productContainer = $("#product-list");
    productos.forEach(product => {
        const productItem = `
            <div class="sc-product-item thumbnail mb-4">
                <img class="img-fluid" data-name="product_image" src="img/${product.Imagen}" alt="${product.Nombre}">
                <h5 class="mt-2" data-name="product_name">${product.Nombre}</h5>
                <p data-name="product_desc">${product.Descripcion}</p>
                <p>Precio: $${product.Precio}</p>
                <div class="form-group2">
                <input class="sc-cart-item-qty" name="product_quantity" min="1" value="1" type="number">
              </div>
                <input name="product_price" value="${product.Precio}" type="hidden" />
                <input name="product_id" value="${product.ID}" type="hidden" />

                <button class="sc-add-to-cart btn btn-primary">Agregar al Carrito</button>
            </div>
        `;
        productContainer.append(productItem);
    });


    $('#smartcart').smartCart({
        lang: {

            cartTitle: "Carrito",

            checkout: 'Comprar',

            clear: 'Borrar',

            subtotal: 'Subtotal:',

            cartRemove: '×',

            cartEmpty: 'Carrito vacío!<br />Elegí tus productos.'

        },
        
            
    })
});
