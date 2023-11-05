const cartService = {
  getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  },
  setCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  },
  addToCart(product) {
    const cart = this.getCart();
    // Check if product is already in cart
    const existingProduct = cart.find((item) => item.id === product.id);
    if (!existingProduct) {
      cart.push({ ...product, quantity: 1 });
    } else {
      existingProduct.quantity++;
    }
    this.setCart(cart);
  },
  removeFromCart(product) {
    const cart = this.getCart();
    const newCart = cart.filter((item) => item.id !== product.id);
    this.setCart(newCart);
  },
  clearCart() {
    this.setCart([]);
  },
  addQuantity(product) {
    const cart = this.getCart();
    const existingProduct = cart.find((item) => item.id === product.id);
    existingProduct.quantity++;
    this.setCart(cart);
  },
  subtractQuantity(product) {
    const cart = this.getCart();
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct.quantity === 1) {
      this.removeFromCart(product);
    } else {
      existingProduct.quantity--;
    }
    this.setCart(cart);
  },
  getCartTotal() {
    const cart = this.getCart();
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  },
};

export default cartService;
