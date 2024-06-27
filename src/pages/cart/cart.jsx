import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopcontext";
import { useContext } from "react";
import "./cart.css";
import { Cartitem } from "./cartitem";
import { useNavigate } from "react-router-dom";
import { Checkout } from "../../checkout";

export  const Cart = () => {
  const { cartItems,getTotalCartAmount} = useContext(ShopContext);
  const TotalAmount =getTotalCartAmount();
  const navigate =useNavigate();

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
      {TotalAmount>0?
      <div className="checkout">
        <p>Total: ${TotalAmount}</p>
      </div>
      :<h1> Your cart is empty </h1>}
       <div className="checkout">
       <button onClick={()=>navigate("/")}>Continue Shopping</button>
        <button onClick={()=>navigate("/checkout")}>Checkout</button>
        </div>
    </div>
  );
};


