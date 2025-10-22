import Layout from "../layout/Layout";
import { useEffect } from "react";

import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    console.log("currentUser", currentUser);
  }, [currentUser]);

  return (
    <Layout>
      <h1>hola {currentUser.user.nombre}</h1>;
    </Layout>
  );
};

export default Home;
