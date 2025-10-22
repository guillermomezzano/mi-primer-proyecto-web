import { useState } from "react";

import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const DialogEditPerson = ({
  open,
  setOpen,
  currentPerson,
  setArrayPerson,
  arrayPerson,
}) => {
  const [localPerson, setLocalPerson] = useState(currentPerson);

  console.log("localPerson en dialog", localPerson);

  const handleOnChange = (e) => {
    console.log("e", e);
    const { name, value } = e.target;
    setLocalPerson({ ...localPerson, [name]: value });
  };

  const saveChange = () => {
    console.log("guardar cambios", localPerson);
    const update = arrayPerson.map((p) =>
      p.id === localPerson.id ? localPerson : p
    );
    console.log("update", update);
    setArrayPerson(update);
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle id="alert-dialog-title">formulario de edición</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            label="Nombre"
            type="text"
            name="nombre"
            value={localPerson.nombre}
            onChange={handleOnChange}
          />
          <TextField
            variant="outlined"
            label="Apellido"
            type="text"
            name="lastName"
            value={localPerson.lastName}
            onChange={handleOnChange}
          />

          <TextField
            label="Nacionalidad"
            variant="outlined"
            type="text"
            name="nacionalidad"
            value={localPerson.nacionalidad}
            onChange={handleOnChange}
          />

          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={localPerson.email}
            onChange={handleOnChange}
          />

          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            name="password"
            value={localPerson.password}
            onChange={handleOnChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>cerrar</Button>
          <Button onClick={() => saveChange()}>guardar cambios</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogEditPerson;
