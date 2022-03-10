import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const incrementModelHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        ...props,
      })
    );
  };

  const decrementModelHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  };

  return (
    <li className={classes.item}>
      <img src={props.image} alt="" className={classes.itemImage} />
      <div className={classes.textContainer}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <div className={classes.priceContainer}>
        <p className={classes.price}>{`${props.price}.00$`}</p>
        <p>{`x${props.amount}`}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={incrementModelHandler}>+</button>
        <button onClick={decrementModelHandler}>-</button>
      </div>
    </li>
  );
};

export default CartItem;
