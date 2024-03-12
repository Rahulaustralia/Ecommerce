import React, { useEffect, useState } from "react";
import { getProduct } from "../service/apl";
import "../Style/Allproduct.css";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Allproduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let response = await getProduct();
    setProduct(response.data);
    console.log(product);
  };

  return (
    <>
      <h1> All Product</h1>
      <div className="rp-parent">
        {product.map((el) => {
          return (
            <div key={el.id} className="rp-child">
              <img src={el.pimage} alt="error" />
              <h3>{el.pname}</h3>
              <p>Details:- {el.ptittle}</p>
              <h5>Price:- ₹{el.pprice}</h5>
              <Button
                variant="contained"
                color="error"
                startIcon={<AddShoppingCartIcon />}
              >
                Add to cart
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Allproduct;
