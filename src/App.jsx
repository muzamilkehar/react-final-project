import{Routes,Route,Link,useNavigate}from"react-router-dom";
import React from "react";
import{Leaf,ArrowRight}from"lucide-react";
import Navbar from"./components/Navbar";
import AboutUs from"./components/AboutUs";
import ProductList from"./components/ProductList";
import CartItem from"./components/CartItem";
import"./App.css";

function Home(){ 
    const go=useNavigate();
    return <main className="landing"><header><Link to="/" className="brand">🌿 Paradise <b>Nursery</b></Link><nav><Link to="/about">About Us</Link><Link to="/plants">Our Plants</Link></nav></header><section className="hero-copy"><small>✦ GROW A HAPPIER HOME</small><h1>Bring nature<br/>into your <em>space.</em></h1><p>Find your perfect plant companion. Make room for fresh air, calm moments and a little everyday paradise.</p><button onClick={()=>go("/plants")}>Get Started <ArrowRight size={18}/></button></section><footer>PARADISE NURSERY · GROW SOMETHING GOOD</footer></main>}function AboutPage(){return <><Navbar/><AboutUs/></>}export default function App(){return <Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/plants" element={<ProductList/>}/><Route path="/cart" element={<CartItem/>}/><Route path="*" element={<Home/>}/></Routes>}