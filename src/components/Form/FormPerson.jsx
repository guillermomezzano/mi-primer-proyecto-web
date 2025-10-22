import { useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

import { usePersonForm } from "../../hooks/usePersonForm";

const FormPerson = ({ setArrayPerson, arrayPerson }) => {
  const { currentPerson, handleSubmit, handleOnChange } = usePersonForm({
    setArrayPerson,
    arrayPerson,
  });

  useEffect(() => {
    console.log(currentPerson);
  }, []);

  return (
    <Box
      component="form"
      sx={{
        p: 2,
        border: "1px solid grey",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        variant="outlined"
        label="Nombre"
        type="text"
        name="nombre"
        value={currentPerson.nombre}
        onChange={handleOnChange}
      />
      <TextField
        variant="outlined"
        label="Apellido"
        type="text"
        name="lastName"
        value={currentPerson.lastName}
        onChange={handleOnChange}
      />

      <TextField
        label="Nacionalidad"
        variant="outlined"
        type="text"
        name="nacionalidad"
        value={currentPerson.nacionalidad}
        onChange={handleOnChange}
      />

      <TextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={currentPerson.email}
        onChange={handleOnChange}
      />

      <TextField
        label="Contraseña"
        variant="outlined"
        type="password"
        name="password"
        value={currentPerson.password}
        onChange={handleOnChange}
      />
      <Button type="submit" variant="contained">
        agregar persona
      </Button>
    </Box>
  );
};
export default FormPerson;
