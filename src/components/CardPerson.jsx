import { useParams } from "react-router";

const CardPerson = ({ arrayPerson }) => {
  let { id } = useParams();
  console.log(id);
  console.log(arrayPerson);

  const person = arrayPerson.find((item) => item.id === id);
  console.log(person);
  return (
    <>
      <h1>detalle del la persona</h1>
      <p>{person.nombre}</p>
    </>
  );
};

export default CardPerson;
