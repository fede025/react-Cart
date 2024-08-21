import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./data";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({cart, setcart}) => {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const [relatedProducts, setrelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setproduct(filterProduct[0]);

    const relatedProducts = items.filter(
      (p) => p.category === product.category
    );
    setrelatedProducts(relatedProducts);
  }, [id, product.category]);

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setcart([...cart, obj]);
    toast.success("Product Added To Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button
            onClick={() =>
              addToCart(
                product.id,
                product.price,
                product.title,
                product.description,
                product.imgSrc
              )
            }
            className="btn btn-warning"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <h1
        style={{
          textAlign: "center",
          color: "black",
          textDecoration: "bold",
          backgroundColor: "bisque",
          marginTop: "30px",
        }}
      >
        Related Products
      </h1>
      <Product cart={cart} setcart={setcart} items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
