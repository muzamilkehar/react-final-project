import React from "react"; // <-- ADD THIS LINE
import { Leaf, Heart, Sprout } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="wrap about">
      <section className="about-hero">
        <small>OUR STORY</small>
        <h1>Growing happiness, one plant at a time.</h1>
        <p>We believe every home deserves a little more green.</p>
      </section>
      <section className="about-text">
        <div>
          <h2>Welcome to Paradise Nursery</h2>
          <p>Paradise Nursery was created for people who love the calm, beauty and energy that plants bring into everyday life. We make it simple to find the right houseplants for your home, workspace or as a thoughtful gift.</p>
          <p>From beginner-friendly favorites to statement foliage, our collection helps you create a greener, more welcoming space. Our mission is to make plant shopping enjoyable and accessible to everyone.</p>
        </div>
        <div className="values">
          <article>
            <Leaf />
            <h3>Nature first</h3>
            <p>We celebrate the beauty and benefits of indoor plants.</p>
          </article>
          <article>
            <Heart />
            <h3>Made with care</h3>
            <p>We want every plant lover to feel welcome.</p>
          </article>
          <article>
            <Sprout />
            <h3>Grow together</h3>
            <p>Simple, joyful steps toward greener living.</p>
          </article>
        </div>
      </section>
    </main>
  );
}