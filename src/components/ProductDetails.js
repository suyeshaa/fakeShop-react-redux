import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router";

const ProductDetails = () => {
  const params = useParams();
  const id = params.productId;
  //product data

  const [product, setProduct] = useState([]);
  //isLoading
  const [isLoading, setIsLoading] = useState(true);

  //useEf
  //axiosreq : id

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
      setIsLoading(false);
    });
  }, [id]);

  // !isLoading && console.log(product.price);

  // return <>{isLoading ? <h1>LOad hora hai</h1> : <h1>No Loading</h1>}</>;
  return (
    <>
      {isLoading ? (
        <h2 style={{ marginTop: "100px" }}>Loading...</h2>
      ) : (
        <div className="ui grid container">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="column lp">
              <img
                className="ui fluid image"
                src={product.image}
                alt="product-img"
              />
            </div>
            <div className="column rp">
              <h1>{product.title}</h1>
              <h2>
                <p className="ui teal tag label" href="">
                  ${product.price}
                </p>
              </h2>
              <h3 className="ui brown block header">{product.category}</h3>
              <p>{product.description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon" />
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
