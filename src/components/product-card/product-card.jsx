import { useContext } from "react";

import "./product-cart.scss";
import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../../button/button";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product; // KAKO JE DOSLO DO OVODA? DA LI JE OVO SAMO DEFINISANJE OBJEKTA ILI NESTO DRUGO?

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;

//objasnit sta je ovo {`${}`} , ne razumijem bas tu funkciju a vidjela sam da se pojavljuje kod definisanja dugmeta
