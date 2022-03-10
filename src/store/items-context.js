import React, { useCallback, useState } from "react";

const ItemsContext = React.createContext({
  items: [],
  isLoading: false,
  getItems: (name) => {},
});

export const ItemsContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getItemsHandler = useCallback((name) => {
    setIsLoading(true);
    fetch(`https://shoe-app-3059a-default-rtdb.firebaseio.com/${name}.json`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Fetching shoe models gone wrong");
        }
      })
      .then((data) => {
        let transformedModels = [];
        for (const key in data) {
          transformedModels.push({
            id: key,
            title: data[key].title,
            image: data[key].image,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setIsLoading(false);
        setItems(transformedModels);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.message);
      });
    setIsLoading(false);
  },[]);

  const itemsCtx = {
      items:items,
      isLoading:isLoading,
      getItems:getItemsHandler
  };

  return (
    <ItemsContext.Provider value={itemsCtx}>
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
