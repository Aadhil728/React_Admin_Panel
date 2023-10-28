import Single from "../../components/single/Single";
import { singleProductData } from "../../data";
import "./singleProduct.scss";

const SingleProduct = () => {
  //fetch data and send to single component
  return (
    <div className="singleProduct">
      <Single {...singleProductData} />
    </div>
  );
};

export default SingleProduct;
