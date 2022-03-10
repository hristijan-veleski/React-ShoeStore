import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { bumpButtonActions } from "../../store/bumpButton-context";
import { cartActions } from "../../store/cart-context";
import ItemsContext from "../../store/items-context";
import Layout from "../Layout/Layout";

import classes from "./ModelDetail.module.css";

const ModelDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const models = useContext(ItemsContext).items;

  const model = models.find((model) => model.id === params.modelId);

  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);

  if (!model) {
    return <Navigate replace to="/model-selection" />;
  }

  const onAddToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: model.id,
        title: model.title,
        image: model.image,
        description: model.description,
        price:model.price,
        amount: 1,
      })
    );
    //here store the cart data in firebase using the user email

    dispatch(bumpButtonActions.toggleBumpFlag(true));
  };

  return (
    <Layout>
      <div className={classes.modelDetailContainer}>
        <img src={model.image} alt="" className={classes.modelImage} />
        <div className={classes.modelText}>
          <h1 className={classes.modelTitle}>{model.title}</h1>
          <p className={classes.modelDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className={classes.price}>{`${model.price}.00$`}</p>
        </div>
        <button
          className={classes.addToCartButton}
          onClick={onAddToCartHandler}
        >
          Add to Cart
        </button>
      </div>
    </Layout>
  );
};

export default ModelDetail;
