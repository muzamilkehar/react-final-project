# Paradise Nursery Shopping Application

A responsive plant-shop e-commerce application built with React, Redux Toolkit, React Router and CSS.

## Features
- Landing page with Paradise Nursery name, background image and Get Started button.
- About Us company information.
- Three plant categories with six unique houseplants each (18 products total).
- Product images, names, descriptions and prices.
- Add to Cart buttons disable after a product is added.
- Shared navigation: Home, Plants and Cart.
- Dynamic cart quantity badge.
- Shopping cart with thumbnails, names, unit prices and line totals.
- Increase/decrease quantity and delete item controls.
- Automatically calculated cart total.
- Checkout displays a Coming Soon message.
- Continue Shopping link returns to the plant listing.
- Responsive layout.

## Technologies
React, React Router, Redux Toolkit, React Redux, JavaScript, CSS and Vite.

## Run locally
1. Install Node.js LTS.
2. Open a terminal in this project folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown by Vite (normally http://localhost:5173).

## Build
Run `npm run build` to create the production build.

## Assignment files
- `src/App.jsx`
- `src/App.css`
- `src/components/AboutUs.jsx`
- `src/components/ProductList.jsx`
- `src/components/CartItem.jsx`
- `src/redux/CartSlice.jsx`

Product photos are loaded from Unsplash and require an internet connection. Checkout is a demonstration only; it does not process payments.
