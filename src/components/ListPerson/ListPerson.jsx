import { getAllCharacters } from "../../services/getServices";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

import BrushIcon from "@mui/icons-material/Brush";
import DeleteIcon from "@mui/icons-material/Delete";

import DialogEditPerson from "../DialogEditPerson/DialogEditPerson";

const ListPerson = ({ arrayPerson, setArrayPerson }) => {
  const [open, setOpen] = useState(false);
  const [currentPerson, setCurrentPerson] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log("characters", characters);
  }, [characters]);

  if (!Array.isArray(arrayPerson)) {
    console.error("no es un array");
    return <p>personas no es un array </p>;
  }

  const deletePerson = (id) => {
    const arrayFiltrado = arrayPerson.filter(
      (unArrayPerson) => unArrayPerson.id !== id
    );
    console.log("arrayFiltrado", arrayFiltrado);
    setArrayPerson(arrayFiltrado);
  };

  const handleEdit = (person) => {
    console.log("editar", person);
    setCurrentPerson(person);
    setOpen(true);
  };

  // const getAllCharacters = async () => {
  //   try {
  //     const response = await Axios.get(
  //       "https://rickandmortyapi.com/api/character"
  //     );
  //     console.log("response", response.data.results);
  //     setCharacters(response.data.results);
  //   } catch (error) {
  //     console.log("Error fetching characters:", error);
  //   }
  // };

  useEffect(() => {
    getAllCharacters(setCharacters);
  }, []);

  return (
    <div>
      {/* <h1>{title}</h1> */}
      {arrayPerson.length === 0 ? (
        <p>no hay personas</p>
      ) : (
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 300, border: "1px solid grey" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">Nombre</TableCell>
                <TableCell align="right">lastName</TableCell>
                <TableCell align="right">nacionalidad</TableCell>
                <TableCell align="right">email</TableCell>
                <TableCell align="right">password</TableCell>
                <TableCell align="right">acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrayPerson.map((person, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {person.nombre}
                  </TableCell>
                  <TableCell align="right">{person.lastName}</TableCell>
                  <TableCell align="right">{person.nacionalidad}</TableCell>
                  <TableCell align="right">{person.email}</TableCell>
                  <TableCell align="right">{person.password}</TableCell>
                  <Button
                    sx={{ color: "red" }}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => deletePerson(person.id)}
                  >
                    eliminar
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<BrushIcon />}
                    onClick={() => handleEdit(person)}
                  >
                    editar
                  </Button>
                  <Button variant="outlined" startIcon={<BrushIcon />}>
                    <Link to={`/details/${person.id}`}>ver</Link>
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {open && (
        <DialogEditPerson
          open={open}
          setOpen={setOpen}
          currentPerson={currentPerson}
          setArrayPerson={setArrayPerson}
          arrayPerson={arrayPerson}
        />
      )}
    </div>
  );
};

export default ListPerson;
