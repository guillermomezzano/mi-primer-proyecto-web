import { TextField, Button } from "@mui/material";

const Singin = () => {
  return (
    <form
      component="form"
      sx={{
        p: 2,
        border: "1px solid grey",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
      }}
    >
      <TextField variant="outlined" label="Nombre" type="text" name="nombre" />
      <TextField
        variant="outlined"
        label="Apellido"
        type="text"
        name="lastName"
      />

      <TextField
        label="Nacionalidad"
        variant="outlined"
        type="text"
        name="nacionalidad"
      />

      <TextField label="Email" variant="outlined" type="email" name="email" />

      <TextField
        label="Contraseña"
        variant="outlined"
        type="password"
        name="password"
      />
      <Button type="submit" variant="contained">
        agregar persona
      </Button>
    </form>
  );
};
export default Singin;
