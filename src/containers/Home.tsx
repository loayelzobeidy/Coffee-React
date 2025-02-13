import { useSelector } from "react-redux";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";

export default function Home() {
  const navigate = useNavigate();
  const user = useSelector((state:RootState) => state.user);
  const isAuthenticated = user.isAuthenticated
  const orderNow = () => {
    if(isAuthenticated)
    navigate("/menu");
  else
  navigate("login")
  };
  return (
    <div className="lower-header bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="max-w-xl">
          {" "}
          {/* Added max-w for better readability on larger screens */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome!
          </h2>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
            We serve the richest coffee in the city!
          </h1>
          <Button className="" clicked={orderNow} >
            Order now
          </Button>
        </div>
      </div>
    </div>
  );
}
