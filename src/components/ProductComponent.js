import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "../redux/API/apiAction";

const ProductComponent = () => {
  const dt = useSelector((state) => state.api);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const list = dt.users.map((el) => (
    <div className="four wide column" key={el.id}>
      <Link to={`/product/${el.id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img className="img" src={el.image} alt="product-img" />
            </div>
            <div className="content">
              <div className="header">{el.title}</div>
              <div className="meta price">${el.price}</div>
              <div className="meta">{el.category}</div>
            </div>
          </div>
        </div>
      </Link>
      {/* <h3>{el.title}</h3>
      <h5>{el.price}</h5>
      <h5>{el.category}</h5>
      <button>del</button> */}
    </div>
  ));
  return <>{list}</>;
};

export default ProductComponent;
