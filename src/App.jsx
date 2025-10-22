import TableStudent from "./components/tableStudent/TableStudent";
import Button from "./components/Button";
import { Routes, Route } from "react-router";
import Home from "./page/Home";
import { useState } from "react";
import "./App.css";
import FormPerson from "./components/Form/FormPerson";
import ListPerson from "./components/ListPerson/ListPerson";
import Singin from "./auth/Singin";
import CardPerson from "./components/CardPerson";
import Login from "./components/Login";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import CounterComponent from "./components/CounterComponent";

const App = () => {
  const [arrayPerson, setArrayPerson] = useState([]);

  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route index element={<Home />} />
          <Route
            path="/list"
            element={
              <ListPerson
                arrayPerson={arrayPerson}
                setArrayPerson={setArrayPerson}
              />
            }
          />
          <Route
            path="/form"
            element={
              <FormPerson
                setArrayPerson={setArrayPerson}
                arrayPerson={arrayPerson}
              />
            }
          />
          <Route
            path="/details/:id"
            element={<CardPerson arrayPerson={arrayPerson} />}
          />
          <Route path="/count" element={<CounterComponent />} />
        </Route>

        {/* <Route path="auth">
          <Route index element={<Singin />} />
          <Route path="singin" element={<Singin />} />
        </Route> */}
      </Routes>
    </>
  );
};

export default App;
