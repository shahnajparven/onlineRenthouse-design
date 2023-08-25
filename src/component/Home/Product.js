import React, { Fragment, useEffect } from "react";
import "./Product.css";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard";
import Loader from "../../layout/Loader";
import { Box, Typography } from "@mui/material";

const Product = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Box py={5}>
          <Box className="cardTitleText">
            <Box width={'50%'}>
          <Typography variant="span"  display={'flex'} justifyContent={'center'} color={'#FD8D14'}> ------- New Arrival Collections -------</Typography>
          <Typography variant="h5"  display={'flex'} justifyContent={'center'} py={2} fontSize={50} fontWeight={'bold'}>Recent Properties</Typography>
          <Typography variant="span"  display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
            Congue commodo ipsum, risus urna nisi. Primis velit turpis
            sollicitudin. Felis aptent sagittis aliquet turpis et tristique
            montes vestibulum rutrum. Scelerisque viverra ac ridiculus enim.
            Curabitur.
          </Typography>
          </Box>
          </Box>
          {/* <Link className="productCard" to={Home}> */}
          <Box className="container" id="container">
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </Box>
          {/* </Link> */}
          <hr />
        </Box>
      )}
    </Fragment>
  );
};

export default Product;
