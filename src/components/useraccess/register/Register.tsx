import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./register.css"
function Register() {
  return (
    <div className="box_register w-100">
      <form className="box_form_register d-flex flex-column justify-content-center gap-3 align-items-center">
        <h2>Regístrese</h2>
        <span>Información sobre su cuenta. </span>
        <div className="form_register">
          <TextField
            id="outlined-basic"
            label="Nombre"
            type="text"
            variant="outlined"
            className="input_register"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            type="text"
            variant="outlined"
            className="input_register"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            type="Password"
            variant="outlined"
            className="input_register"
          />
          <TextField
            id="outlined-basic"
            label="Confirmar Password"
            type="Password"
            variant="outlined"
            className="input_register"
          />
        </div>
        <div className="w-100 d-flex flex-column justify-content-center gap-2 align-items-center p-3">
          <Button variant="outlined" className="w-50">
            Register
          </Button>
          <Button variant="outlined" className="w-100">
            Registrarse con Gmail
          </Button>
        </div>
        <NavLink className="nav_link" to="/login">
          ¿Ya tienes una cuenta? Entre aquí
        </NavLink>
      </form>
    </div>
  );
}

export default Register;
