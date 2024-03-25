import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryList from "./CategoryList";
import Pagination from "./Pagination";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/categories");
        const data = response.data.data;
        setCategories(data);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to fetch categories. Please try again later.");
        toast.error("Failed to fetch categories. Please try again later.");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto max-width-1">
      <h1 className="py-8 text-center h1">Categories</h1>
      {error && (
        <div className="mb-4 font-semibold text-center text-red-500">
          {error}
        </div>
      )}
      <section className="px-4 py-4">
        {categories && categories.length > 0 ? (
          <>
            <CategoryList categories={categories} />
          </>
        ) : (
          <div className="text-center text-gray-500">Loading...</div>
        )}
      </section>
    </div>
  );
};

export default Category;
