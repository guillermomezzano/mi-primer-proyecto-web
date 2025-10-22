import { useState } from "react";
import { useNavigate } from "react-router";

const person = {
  nombre: "",
  lastName: "",
  nacionalidad: "",
  email: "",
  password: "",
};

export const usePersonForm = ({ setArrayPerson, arrayPerson }) => {
  const [currentPerson, setCurrentPerson] = useState(person);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const personUuid = { ...currentPerson, id: crypto.randomUUID() };
    localStorage.setItem("person", JSON.stringify(personUuid));
    setArrayPerson([...arrayPerson, personUuid]);

    setCurrentPerson(person);
    navigate("/list");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCurrentPerson({ ...currentPerson, [name]: value });
  };

  return { currentPerson, handleSubmit, handleOnChange };
};

// export default usePersonForm;
