import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard";
import Loader from "../../layout/Loader";
import { Box } from "@mui/material";

const categories = [
  "Rent-House",
  "Sublet",
  "Bachelors",
  "Commersial-Area",
  "Guest-House",
];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [ratings, setRatings] = useState(0);
  const [category, setCategory] = useState("");

  const { products, loading, error } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="products-container">
            <h2 className="productsHeading">All Rental Houses</h2>

            <Box
              pt={2}
              display="flex"
              justifyContent="center"
              flexWrap="wrap"
              gap={2}
            >
              {categories.map((category) => (
                <button
                  className="categoryBtn"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </button>
              ))}
            </Box>

            <div className="products">
              {products.length > 0 ? (
                products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <Box mt="4" className="notFound">
                 Not Result Found
                </Box>
              )}
            </div>
            <Box onClick={setCurrentPage}></Box>
            <Box onClick={setPrice}></Box>
            <Box onClick={setRatings}></Box>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
