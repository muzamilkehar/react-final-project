import React from "react"; // <-- ADD THIS LINE
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../redux/CartSlice";
import { plantCategories } from "../data/plants";
import { Check, ShoppingCart } from "lucide-react";
import Navbar from "./Navbar";

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const added = (id) => items.some((x) => x.id === id);

  return (
    <>
      <Navbar />
      <main className="wrap">
        <header className="page-title">
          <small>FIND YOUR NEW FAVORITE</small>
          <h1>Bring home a little <em>paradise.</em></h1>
          <p>Explore beautiful houseplants selected to make every space feel alive.</p>
        </header>
        
        {plantCategories.map((cat) => (
          <section className="category" key={cat.id}>
            <div className="cat-title">
              <div>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </div>
              <small>{cat.plants.length} plants</small> 
            </div>
            <div className="grid">
              {cat.plants.map((p) => (
                <article className="plant" key={p.id}>
                  <img src={p.image} alt={p.name} />
                  <div className="plant-info">
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <footer>
                      <b>${p.price.toFixed(2)}</b>
                      <button 
                        disabled={added(p.id)} 
                        onClick={() => dispatch(addToCart(p))}
                      >
                        {added(p.id) ? (
                          <><Check size={15} /> Added</>
                        ) : (
                          <><ShoppingCart size={15} /> Add to Cart</>
                        )}
                      </button>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}