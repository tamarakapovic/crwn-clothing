import { CardIconContainer, ShoppingIcon, ItemCount } from "./card-icon.styles";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CardIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartItemCount}</ItemCount>
    </CardIconContainer>
  );
};

export default CardIcon;

// Crad icon je za malu ikonicu u desnom gornjem uglu  u kojoj ce se nalaziti adovani proizvodi.
