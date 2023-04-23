import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div className="box_login w-100">
      <form className="box_form_login d-flex flex-column justify-content-center gap-3 align-items-center">
        <h2>Regístrese</h2>
        <span>Información sobre su cuenta. </span>
        <TextField
          id="outlined-basic"
          label="Nombre"
          type="text"
          variant="outlined"
          className="input_login"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          type="text"
          variant="outlined"
          className="input_login"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="Password"
          variant="outlined"
          className="input_login"
        />
        <TextField
          id="outlined-basic"
          label="Confirmar Password"
          type="Password"
          variant="outlined"
          className="input_login"
        />
        <Button variant="outlined" className="w-50">
          Register
        </Button>
        <hr />
        <div className="w-100 d-flex flex-column justify-content-center gap-2 align-items-center p-3">
          <Button variant="outlined" className="w-50">
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
