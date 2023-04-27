import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import gmail from "./../../../assets/logo_google.png";
import "./login.css"
function Login() {
  return (
    <div className="box_login w-100">
      <h2>Iniciar sesión</h2>
      <form className="box_form_login d-flex flex-column justify-content-center align-items-center">
        <div className="w-100 d-flex flex-column justify-content-center gap-3 align-items-center">
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
            type="password"
            variant="outlined"
            className="input_login"
          />
          <Button variant="contained" className="btn_login">
            Login
          </Button>
        </div>
        <div className="w-100 d-flex flex-column justify-content-center gap-2 align-items-center p-3">
          <Button variant="outlined" className="btn_outlined">
            <img src={gmail} alt="gmail_logo" /> <span>Iniciar con Gmail</span>
          </Button>
        </div>
        <div  className="d-flex justify-content-center align-items-center w-100 border">
          <NavLink className="nav_link" to="/register">
            Crear Nueva Cuenta
          </NavLink>
          <NavLink className="nav_link" to="/cambiarPass">
            ¿Olvidaste tu contraseña?
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login;
