import Single from "../../components/single/Single";
import { singleUserData } from "../../data";
import "./singleUser.scss";

const SingleUser = () => {
  //fetch data and send to single component
  return (
    <div className="singleUser">
      <Single {...singleUserData} />
    </div>
  );
};

export default SingleUser;
