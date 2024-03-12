import axios from "axios";

const API_URL = "http://localhost:3002/products";

export const addProduct = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (err) {
    console.log("Error", err);
  }
};

export const getProduct = async () => {
  try {
    return await axios.get(API_URL);
  } catch (err) {
    console.log("Error", err);
  }
};
