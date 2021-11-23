import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SimpleMap from "./Map";

const SingleUser = () => {
  const location = useLocation();
  const rowName = location.state.name;
  const rowEmail = location.state.email;
  return (
    <section className="single-user">
      <div className="single-user-info">
        <h1>User Details</h1>
        <Link to="/" className="btn">
          back to users
        </Link>
      </div>
      <div>
        <p> Name: {rowName}</p>
        <p> Email: {rowEmail}</p>
      </div>
      <SimpleMap />
    </section>
  );
};

export default SingleUser;
