import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  const addFavouriteMeal = (id) => {
    setFavouriteMealIds((currentIds) => [...currentIds, id]);
  };

  const removeFavouriteMeal = (id) => {
    setFavouriteMealIds((currentIds) =>
      currentIds.filter((currentId) => currentId !== id)
    );
  };

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavouriteMeal,
    removeFavourite: removeFavouriteMeal,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;
