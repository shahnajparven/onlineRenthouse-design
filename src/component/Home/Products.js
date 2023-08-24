import React, { Fragment, useEffect, useState, useRef } from "react";
import "./Products.css"
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard";
import Loader from "../../layout/Loader";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { Container } from "react-bootstrap";
import { useReactToPrint } from 'react-to-print';
import {Link, NavLink,useLocation} from 'react-router-dom';


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
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const { products, loading, error, productsCount, resultPerPage,filteredProductsCount } = useSelector(
    (state) => state.products);


  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  let count = filteredProductsCount;


  useEffect(() => {
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
  
    dispatch(getProduct(keyword,currentPage, price, category,ratings));
  }, [dispatch, keyword,currentPage, price, category,ratings,alert,error]);




//print method start
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
//print method end



  return (
    <Fragment>
      
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
         <div className="products-container">
          <h2 className="productsHeading">All Rental Houses</h2>



                         
      <div ref={componentRef}>
      



          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          </div>
        
          <div className="filterBox">
        
         
          <NavLink className="" to="Search"><button className="searchbtn">Search with area</button></NavLink>
         
            <Typography className="price-heding">Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />

            <Typography className="categories-heding">Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
        


          <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
            <button className="printbtn" onClick={handlePrint}>Print</button>

          </div>
        

          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
            
          )}
          
         
          </div>
        </Fragment>
      )}
    
    </Fragment>
  );
};

export default Products;