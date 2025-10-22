import { useEffect } from "react";
import Axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  const getdata = async () => {
    try {
      const response = await Axios.get("http://localhost:8080/persona/1");
      console.log(response);
      setCurrentUser({
        user: response.data,
        isAuthenticated: true,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>login</h1>
      <button onClick={getdata}>ingresar</button>
    </>
  );
};
export default Login;
