import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import "./footer.css"
function Footer() {
  return (
    <footer className="footer_box">
      <div>
        <section>
          <span>The Batman</span>
        </section>
        <section>
          <li>Terminos y condiciones</li>
          <li>política de privacidad</li>
        </section>
        <section>
          <li>Sobre Nosotros</li>
          <li>Contactanos</li>
        </section>
      </div>
      <section className="box_Copyright">
      <span>
            <AiOutlineInstagram className="icons"/>
            <AiOutlineFacebook className="icons"/>
          </span>
        <span>The Batman | Copyright All rights reserved</span>
      </section>
    </footer>
  );
}

export default Footer;
