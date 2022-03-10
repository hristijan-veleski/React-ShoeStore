import Modal from "../../ui/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const totalAmount = cartItems.reduce((curr, item) => curr + item.totalPrice, 0);

  return (
    <Modal>
      <div className={classes.cart}>
        <h1>Your Shopping Cart</h1>
        <ul className={classes.cartList}>
          {cartItems.map((cartItem) => {
            return (
              <CartItem
                key={cartItem.id}
                id={cartItem.id}
                image={cartItem.image}
                title={cartItem.title}
                description={cartItem.description}
                price={cartItem.price}
                amount={cartItem.amount}
                totalPrice={cartItem.totalPrice}
              />
            );
          })}
        </ul>
        <p>Total Amount:{`${totalAmount}.00$`}</p>
        <button className={classes.checkoutButton}>Proceed to checkout</button>
      </div>
    </Modal>
  );
};

export default Cart;
