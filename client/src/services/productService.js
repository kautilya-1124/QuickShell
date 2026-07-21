import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/products",
});

// Get All Products
export const getProducts = async () => {
  try {
    const res = await API.get("/");
    return res.data.products || [];
  } catch (error) {
    console.error("Get Products Error:", error);
    return [];
  }
};

// Get Single Product
export const getProductById = async (id) => {
  try {
    const res = await API.get(`/${id}`);
    return res.data.product;
  } catch (error) {
    console.error("Get Product Error:", error);
    return null;
  }
};

// Related Products
export const getRelatedProducts = async (category, currentId) => {
  try {
    const res = await API.get("/");

    return res.data.products.filter(
      (item) =>
        item.category === category &&
        item._id !== currentId
    );
  } catch (error) {
    console.error("Related Products Error:", error);
    return [];
  }
};