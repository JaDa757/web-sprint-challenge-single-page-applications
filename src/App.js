import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import PizzaForm from "./pizzaform";
import "./App.css"; 


const App = () => {
  return (
    <div className="container">
      <nav>
        <h1 className="header">Bloomtech Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>&nbsp;
          <Link id="order-pizza" to="/pizza">
            Order Pizza
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<div>Home Page Content</div>} />
        <Route path="/pizza" element={<PizzaForm />} />
      </Routes>
    </div>
  );
};

export default App;
