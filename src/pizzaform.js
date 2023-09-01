import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PizzaForm = () => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [toppings, setToppings] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [errors, setErrors] = useState({ name: "" });
  const [formValid, setFormValid] = useState(false);

  const toppingOptions = [
    "No Toppings",
    "Cheese",
    "Pepperoni",
    "Mushrooms",
    "Onions",
    "Peppers",
    "Sausage",
    "Pineapple",
    "Extra Cheese"
    // Add more toppings as needed
  ];

  const validateName = () => {
    if (name.length < 2) {
      setErrors({ name: "name must be at least 2 characters" });
    } else {
      setErrors({ name: "" });
    }
  };

  useEffect(() => {
    const isFormValid =
      name.length >= 2 &&
      size !== "" &&
      toppings.length >= 1; 
    setFormValid(isFormValid);
  }, [name, size, toppings]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="head">
      <form onSubmit={handleSubmit} id="pizza-form">
        <nav>
          <h1 className="header">Bloomtech Eats</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>&nbsp;
          </div>
        </nav>
        <div className="inputGroup">
          <label htmlFor="name-input">Name:</label>
          <input
            type="text"
            id="name-input"
            placeholder="Type your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              validateName();
            }}
          />
          {errors.name && <div className="validation">{errors.name}</div>}
        </div>
        <div className="inputGroup">
          <label htmlFor="size-dropdown">Pizza Size:</label>
          <select
            id="size-dropdown"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="XLarge">Extra Large</option>

          </select>
        </div>
        <div className="inputGroup">
          <label>Toppings:</label>
          {toppingOptions.map((topping) => (
            <label key={topping}>
              <input
                type="checkbox"
                name="toppings"
                value={topping}
                checked={toppings.includes(topping)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setToppings([...toppings, e.target.value]);
                  } else {
                    setToppings(toppings.filter((top) => top !== e.target.value));
                  }
                }}
              />
              {topping}
            </label>
          ))}
        </div>
        <div className="inputGroup">
          <label htmlFor="special-text">Special Instructions:</label>
          <input
            type="text"
            id="special-text"
            placeholder="Anything special?"
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" id="order-button" disabled={!formValid}>
            Add to Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default PizzaForm;
