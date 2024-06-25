import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopcontext";
import { useContext } from "react";
import "./cart.css";
import { Cartitem } from "./cartitem";


export  const Cart = () => {
  const { cartItems} = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>
          Your cart items
        </h1>
      </div>
      <div className="cartItem">
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id] !== 0){
            return <Cartitem data={product}/>
          }
        })}
      </div>
    </div>
  );
};


