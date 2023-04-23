import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="box_login w-100">
      <form className="box_form_login d-flex flex-column justify-content-center gap-2 align-items-center">
        <h2>
        Iniciar sesión
        </h2>
        <TextField
          id="outlined-basic"
          label="Email"
          type="text"
          variant="outlined"
          className="input_login"
        />
        <TextField
          id="outlined-basic"
          label="Pass"
          type="password"
          variant="outlined"
          className="input_login"
        />
        <Button variant="outlined" className="w-50">
          Login
        </Button>
        <hr />
        <div className="w-100 d-flex flex-column justify-content-center gap-2 align-items-center p-3">
          <Button variant="outlined" className="w-50">
            Iniciar con Gmail
          </Button>
          <Button variant="outlined" className="w-50">
            Iniciar con Facebook
          </Button>
        </div>
        <NavLink className="nav_link" to="/register" >Crear Nueva Cuenta</NavLink>
      </form>
    </div>
  );
}

export default Login;
