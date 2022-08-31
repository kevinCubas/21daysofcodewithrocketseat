const cartBtn = document.getElementById('cart-btn')
const closeBtn = document.getElementById("close-btn")
const productSection = document.getElementById("products")
const cartItems = document.getElementById("cart-items")

const products = [
  {
    "id": 0,
    "name": "Funko Pop Black Panther",
    "image": "assets/blackpanther.jpg",
    "price": 150,
    "quantity": 0,
    "total": 0
  },
  {
    "id": 1,
    "name": "Funko Pop Tanjiro",
    "image": "assets/demonslayertanjiro.jpg",
    "price": 110,
    "quantity": 0,
    "total": 0
  },
  {
    "id": 2,
    "name": "Funko Pop Dustin ST",
    "image": "assets/dustinst.jpg",
    "price": 90,
    "quantity": 0,
    "total": 0
  },
  {
    "id": 3,
    "name": "Funko Pop Mandalorian",
    "image": "assets/funkomandalorian.jpg",
    "price": 100,
    "quantity": 0,
    "total": 0
  },
  {
    "id": 4,
    "name": "Funko Pop Stan Lee",
    "image": "assets/funkostanlee.jpg",
    "price": 140,
    "quantity": 0,
    "total": 0
  },
  {
    "id": 5,
    "name": "Funko Pop Dr. Strange",
    "image": "assets/funkostrange.jpg",
    "price": 150,
    "quantity": 0,
    "total": 0
  },
  {
    "id": 6,
    "name": "Funko Pop Harry Potter",
    "image": "assets/harrypotter.jpg",
    "price": 140,
    "quantity": 0,
    "total": 0
  },
  {
    "id": 7,
    "name": "Funko Pop Mewtwo",
    "image": "assets/meowtwo.jpg",
    "price": 120,
    "quantity": 0,
    "total": 0
  },
  {
    "id": 8,
    "name": "Funko Pop Naruto",
    "image": "assets/naruto.jpg",
    "price": 130,
    "quantity": 0,
    "total": 0
  },
  {
    "id": 9,
    "name": "Funko Pop Raj TBBT",
    "image": "assets/rajtbbt.jpg",
    "price": 100,
    "quantity": 0,
    "total": 0
  },
  {
    "id": 10,
    "name": "Funko Pop Rogue X-men",
    "image": "assets/roguexmen.jpg",
    "price": 130,
    "quantity": 0,
    "total": 0
  },
  {
    "id": 11,
    "name": "Funko Pop Scarlet Witch",
    "image": "assets/scarletwitch.jpg",
    "price": 135,
    "quantity": 0,
    "total": 0
  },
  {
    "id": 12,
    "name": "Funko Pop She Hulk",
    "image": "assets/shehulk.jpg",
    "price": 130,
    "quantity": 0,
    "total": 0
  },
  {
    "id": 13,
    "name": "Funko Pop Thor",
    "image": "assets/thor.jpg",
    "price": 120,
    "quantity": 0,
    "total": 0
  },
  {
    "id": 14,
    "name": "Funko Pop Wonder Woman",
    "image": "assets/wonderwoman.jpg",
    "price": 130,
    "quantity": 0,
    "total": 0
  }
]

const cart = [];
let total = 0;

const calcTotal = () => {

  if (cart.length > 0) {
    const totalArray = cart.map((product) => {
      let totalPrice = 0
      product.total = (product.price * product.quantity);
      return totalPrice = totalPrice + product.total
    })
    total = totalArray.reduce((item, acc) => acc += item)
  }
}

function openCart(event) {
  if (event.type === 'touchstart') {
    event.preventDefault()
  }
  document.querySelector("#cart").classList.add('active')
};

function closeCart(event) {
  if (event.type === 'touchstart') {
    event.preventDefault()
  }
  document.querySelector("#cart").classList.remove('active')
};

cartBtn.addEventListener('click', openCart)
closeBtn.addEventListener("click", closeCart)

function displayData() {
  const productsElements = products.map((product) => {
    const price = product.price.toFixed(2)
    return `
      <div class="product-container">
      <div class="product-image">
        <img src="${product.image}" alt="product item ${product.name}" />
      </div>
      <h2 class="product-name">${product.name}</h2>
      <div class="shopping-info">
        <span class="price">US$${price}</span>
        <button class="bagIcon" key="${product.id}"><i class="material-symbols-outlined">
          shopping_bag
        </i></button>
      </div>
    </div>
      `
  }).join('')

  productSection.innerHTML = productsElements;

  const addToCartBtn = document.querySelectorAll(".bagIcon")

  addToCartBtn.forEach((btn) => {
    let key = btn.getAttribute('key')
    btn.addEventListener('click', () => {
      addToCart(products[key])
    })
  })
}

function addToCart(element) {
  if (cart.includes(element)) {
    element.quantity++
    calcTotal()
  } else {
    element.quantity++
    cart.push(element)
    calcTotal()
  }
  updateCart()
}

function removeFromCart(elem) {
  cart.splice(elem, 1)
  updateCart()
}

function buyCartProducts() {
  cart.splice(0)
  updateCart()
  alert("Thank you for shopping with us, your order is placed ❤️")
}

function updateCart() {
  calcTotal()
  const cartProducts = cart.map((product, index) => {
    const price = product.price.toFixed(2)
    return `
    <div class="cart-product-container">
        <img src="${product.image}" alt="product item" class="cart-product-image" />
        <div class="cart-detail-product">
          <h3 class="product-cart-title">${product.name}</h3>
          <div class="product-cart-info">
            <span class="cart-product-price">US$${price}</span>
            <i onclick=removeFromCart(${index}) class="material-symbols-outlined delete-btn">
              delete
            </i>
            <span>Quantity: ${product.quantity}</span>
          </div>
        </div>
      </div>
      <hr>
    `
  })

  const totalContainer = `
  <div id="total">
    <h3 id="total-title">Total:</h3>
    <span id="total-price">US$${total}</span>
  </div>
  `

  if(cart.length > 0) {
    cartBtn.classList.add('hasProduct')
    cartItems.innerHTML = `
      ${cartProducts}
      ${totalContainer}
        <button onclick="buyCartProducts()" type="button" id="btn-buy">Buy now</button>
    `;
  } else {
    cartBtn.classList.remove('hasProduct')
    cartItems.innerHTML = `
    <span>Add some products...</span>
    `
  }
}

updateCart()
displayData()