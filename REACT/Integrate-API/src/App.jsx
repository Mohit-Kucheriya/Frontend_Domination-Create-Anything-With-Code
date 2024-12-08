import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [product, setProduct] = useState([]);

  const getAPIData = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const addProduct = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .post(api, {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="pt-[5%] pl-[5%] w-3/4">
      <button
        onClick={() => getAPIData()}
        className="px-4 py-2 bg-black text-white rounded-md text-sm mb-3"
      >
        Get Data
      </button>
      <br />

      <button
        onClick={() => addProduct()}
        className="px-4 py-2 bg-black text-white rounded-md text-sm"
      >
        Add Product
      </button>

      <hr className="my-5" />
      <ul className="flex flex-col gap-2">
        {product.length > 0 ? (
          product.map((product, index) => {
            return (
              <li key={index} className="text-sm bg-lime-200 p-2 rounded-md">
                {product.title}
              </li>
            );
          })
        ) : (
          <h1 className="text-center text-xl">Loading...</h1>
        )}
      </ul>
    </div>
  );
};

export default App;
