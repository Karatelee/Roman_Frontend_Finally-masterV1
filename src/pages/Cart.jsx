import cartService from "@/utils/cart";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import axios from "axios";
import "../scss/styles.scss"

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartService.getCart());
  }, []);

  const removeFromCart = (dish) => {
    cartService.removeFromCart(dish);
    setCart(cartService.getCart());
  };

  const addQuantity = (dish) => {
    cartService.addQuantity(dish);
    setCart(cartService.getCart());
  };

  const subtractQuantity = (dish) => {
    cartService.subtractQuantity(dish);
    setCart(cartService.getCart());
  };

  const sendOrder = () => {
    let order = cartService.getCart();
    order = order.map((dish) => {
      return {
        id: dish.id,
        quantity: dish.quantity,
      };
    });
    order = {
      dishes: order,
    };

    axios
      .post("http://localhost:8000/api/orders/", order)
      .then((res) => {
        console.log(res);
        cartService.clearCart();
        setCart(cartService.getCart());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Navbar />
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <>
          <button onClick={() => cartService.clearCart()}>Clear cart</button>
          <ul>
            {cart.map((dish) => (
              <li key={dish.id}>
                <img className="dish-image" src={dish.image} alt={dish.name} /> 
                <p>{dish.name}</p>
                
                <p>price: {dish.price}$</p>
                <button onClick={() => addQuantity(dish)}>+</button>
                <button onClick={() => subtractQuantity(dish)}>-</button>
                <p>quantity: {dish.quantity}</p>
                <button onClick={() => removeFromCart(dish)}>
                  Remove from cart
                </button>
                <hr />
              </li>
            ))}
          </ul>
          <p>Total: {cartService.getCartTotal()}$</p>
          <button onClick={() => sendOrder()}>Send order</button>
        </>
      ) : (
        <p>Cart is empty</p>
      )}
    </>
  );
};

export default Cart;
