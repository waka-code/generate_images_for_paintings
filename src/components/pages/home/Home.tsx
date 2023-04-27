import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import tres from "../../../assets/3.png";
import { FcReddit, FcPicture,  } from "react-icons/fc";
import Prices from "../prices/Prices";
import "./home.css"

function Home() {
  return (
    <Container className="box_home_conteneder">
      <div className="box_home d-flex justify-content-between align-items-center ">
        <div className="d-block w-50">
          <span className="font-weight-bold">
            Explorando el lado más profundo de la belleza.{" "}
            <FcReddit className="icons" />
          </span>
          <h1 className="py-2">
            Un viaje abstracto a través de colores y formas
          </h1>
          <p>
            Líneas impresionantes una obra de arte producida por IA que muestra
            un cosmos abstracto y enigmático en flujo constante. Fomenta la
            reflexión y el descubrimiento de los alcances de la inventiva en un
            entorno abstracto.
          </p>
          <NavLink className="nav_link" to="login">
            <Button className="m-1" variant="secondary">
              Prueba Gratis
            </Button>
          </NavLink>
          <NavLink className="nav_link" to="models">
            <Button className="m-1" variant="secondary">
              <span>Ver todos los modelos</span>
              <FcPicture className="icons" />
            </Button>
          </NavLink>
        </div>
        <div className="box_img w-50">
          <img
            className="img_bot d-block w-100"
            src={`${tres}`}
            alt="Third slide"
          />
        </div>
      </div>
      <Prices />
    </Container>
  );
}

export default Home;
