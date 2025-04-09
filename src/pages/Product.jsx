import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Product = () => {
  const dispatch = useDispatch();

  // Hardcoded product data
  const product = {
    id: 1,
    title: "Speed Boat 2000",
    category: "Boat",
    price: 50000,
    description: "Fast and reliable boat for water adventures.",
    image: "https://via.placeholder.com/300",
    rating: {
      rate: 4.5,
      count: 12,
    },
  };

  const addToCart = (product) => {
    dispatch(addCart(product));
  };

  return (
    <div className="container my-5 py-2">
      <div className="row">
        {/* Product Card */}
        <div className="col-md-6 py-3">
          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            width="400px"
            height="400px"
          />
        </div>
        <div className="col-md-6 py-5">
          <h4 className="text-uppercase text-muted">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            {product.rating.rate} <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark mx-3">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
