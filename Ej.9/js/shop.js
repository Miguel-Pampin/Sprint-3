// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

var counter = 0;

// Exercise 1
function buy(id) {
    addToCart(id)
    // 1. Loop for to the array products to get the item to add to cart

    /*  let i, productToCart, product, found = false;
     for (i = 0; i < products.length; i++) {
         product = products[i];
         if (product.id == id) {
             productToCart = {...product};
           found = true;
         }
     }
   
     // 2. Add found product to the cartList array
   
     if (found == true) {
         productToCart.quantity = 1;
       cartList.push(productToCart);
       counter++;
     }
     document.getElementById("count_product").innerHTML = counter;
     console.log(cartList); */
}
// Exercise 2
function cleanCart() {
    cart.length = 0;
    counter = 0;
    document.getElementById("count_product").innerHTML = 0;
    console.log(cartList);
    open_modal()
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].subtotalWithDiscount * cart[i].quantity;
    }
    document.getElementById('total_price').innerHTML = total;
    console.log(total);
}
// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    /* cart.length = 0;
    for (i = 0; i < cartList.length; i++) {
        let found = false;
        for (j = 0; j < cart.length; j++) {
            if (cartList[i].id == cart[j].id) {
                found = true;
                cart[j].quantity += 1;
            }
        }
        if (found == false) {
            let product = { ...cartList[i] };
            product.quantity = 1;
            cart.push(product);
        }
    }
    console.log(cart); */
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == "cooking oil" && cart[i].quantity >= 3) {

            let priceCookinOil = 10;
            cart[i].subtotalWithDiscount = priceCookinOil;
        }
        else if (cart[i].name == "Instant cupcake mixture" && cart[i].quantity >= 10) {

            let priceCupcake = (2 / 3 * cart[i].price);
            cart[i].subtotalWithDiscount = priceCupcake;
        }
        else {
            cart[i].subtotalWithDiscount = cart[i].price;
        }
    }
    console.log(cart);
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    document.getElementById("cart_list").innerHTML = "";
    let total = 0;
    for (let i = 0; i < cart.length; i++) {

        let name = cart[i].name;
        let price = cart[i].price;
        let quantity = cart[i].quantity;
        let totalWithDiscount = (cart[i].subtotalWithDiscount * quantity).toFixed(2);


        document.getElementById("cart_list").innerHTML += `<tr>
        <th scope="row">${name}</th>
        <td>$${price}</td>
        <td>${quantity}</td>
        <td>$${totalWithDiscount}</td>
        <td> <button id="button-delete" onclick="removeFromCart(${cart[i].id})" class="button-delete fas fa-trash remove-product" style="border:none; background-color:white"> </button></td>
      </tr>`

        total += parseFloat(totalWithDiscount);
        document.getElementById("total_price").innerHTML = total;
    }
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    let productToCart, cartItem;

    const productToCartIndex = products.findIndex(product => product.id === id);

    if (productToCartIndex != -1) {

        productToCart = { ...products[productToCartIndex] };
        counter++;
    }

    const cartItemIndex = cart.findIndex(product => product.id === productToCart.id);

    if (cartItemIndex == -1) {

        cart.push(productToCart);
        cartItem = cart.at(-1);
        cartItem.quantity = 1;

    } else {

        cartItem = cart[cartItemIndex];
        cartItem.quantity++;
    }

    cartItem.subTotal = cartItem.price * cartItem.quantity;

    cartItem.subTotalWithDiscount = "not available";

    applyPromotionsCart();
    document.getElementById("count_product").innerHTML = counter;
}
// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (i = 0; i < cart.length; i++) {
        console.log(id, cart[i].id);
        if (id === cart[i].id) {
            if (cart[i].quantity > 1) {
                cart[i].quantity--;
                cart[i].subtotalWithDiscount -= cart[i].price;
            } else {
                cart.splice(i, 1);
            }
        }
    }
    applyPromotionsCart();
    calculateTotal();
    printCart();
    counter--;
    document.getElementById("count_product").innerHTML = counter;
}

function open_modal() {

    applyPromotionsCart()
    calculateTotal();
    printCart()
}