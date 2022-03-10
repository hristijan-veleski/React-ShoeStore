import { Fragment, useContext, useEffect } from "react";
import ItemsContext from "../../store/items-context";
import LoadingSpinner from "../../ui/LoadingSpinner";
import Model from "./Model";
import classes from "./Models.module.css";


const Models = (props) => {
  

  const itemsCtx = useContext(ItemsContext);

  const isLoading = itemsCtx.isLoading;
  const items = itemsCtx.items;
  const {getItems} = itemsCtx; 
useEffect(() => {
    getItems(props.name);
  }, [getItems]);


  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <ul className={classes.modelsList}>
          {items.map((model) => {
            return (
              <Model
                key={model.id}
                id={model.id}
                image={model.image}
                title={model.title}
                price={model.price}
              />
            );
          })}
        </ul>
      )}
    </Fragment>
  );
};

export default Models;
