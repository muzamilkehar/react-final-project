import React from "react"; // <-- ADDED REACT IMPORT HERE
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import { 
  decreaseQuantity, 
  increaseQuantity, 
  removeFromCart, 
  selectCartItems, 
  selectCartTotal 
} from "../redux/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const count = items.reduce((n, x) => n + x.quantity, 0);

  return (
    <>
      <Navbar />
      <main className="wrap cart">
        <header className="cart-heading">
          <div>
            <small>YOUR SELECTION</small>
            <h1>Shopping Cart</h1>
            <p>Everything you need to bring your space to life.</p>
          </div>
          <Link to="/plants">
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
        </header>

        {!items.length ? (
          <section className="empty">
            <h2>Your cart is looking a little empty</h2>
            <p>Discover a plant that makes you smile.</p>
            <Link className="button" to="/plants">Explore Plants</Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              <div className="cart-labels">
                <span>PRODUCT</span>
                <span>QUANTITY</span>
                <span>SUBTOTAL</span>
              </div>
              {items.map((p) => (
                <article className="cart-row" key={p.id}>
                  <div className="cart-product">
                    <img src={p.image} alt={p.name} />
                    <div>
                      <h3>{p.name}</h3>
                      <p>${p.price.toFixed(2)} each</p>
                      <button 
                        className="remove" 
                        onClick={() => dispatch(removeFromCart(p.id))}
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                  <div className="qty">
                    <button 
                      aria-label="Decrease quantity" 
                      onClick={() => dispatch(decreaseQuantity(p.id))}
                    >
                      <Minus size={14} />
                    </button>
                    <span>{p.quantity}</span>
                    <button 
                      aria-label="Increase quantity" 
                      onClick={() => dispatch(increaseQuantity(p.id))}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <b className="subtotal">${(p.price * p.quantity).toFixed(2)}</b>
                </article>
              ))}
            </section>
            <aside className="summary">
              <small>ORDER SUMMARY</small>
              <h2>Your total</h2>
              <p>
                <span>Items ({count})</span>
                <b>${total.toFixed(2)}</b>
              </p>
              <p>
                <span>Delivery</span>
                <span>Calculated later</span>
              </p>
              <hr />
              <h3>
                <span>Total amount</span>
                <b>${total.toFixed(2)}</b>
              </h3>
              <button 
                className="checkout" 
                onClick={() => window.alert("Thank you for shopping with Paradise Nursery! Checkout is Coming Soon.")}
              >
                Checkout →
              </button>
              <small className="thanks">Thank you for choosing Paradise Nursery.</small>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}