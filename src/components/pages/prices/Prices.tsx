import "../../../App.css";
import Card from "react-bootstrap/Card";
import { FcApproval, FcLike } from "react-icons/fc";
import "./prices.css"
function Prices() {
  return (
    <div className="box_prices_contenedor  d-flex justify-content-center flex-column align-items-center container">
      <h2 className="box_prices_h2">Precios</h2>
      <span>
        Elija el plan según sus necesidades, cancele en cualquier momento.
      </span>
      <div className=" d-flex justify-content-around  align-items-center container ">
        <Card style={{ width: "25rem" }} className="box-prices m-5">
          <Card.Body>
            <Card.Title className="box_price_title">
              <Card.Text>$17.99</Card.Text>
              <Card.Text className="box_price_unidad"></Card.Text>
            </Card.Title>
            <Card.Body className="box_price_body">
              <Card.Text>
                {" "}
                <FcApproval className="icons" />
                Lorem ipsum dolor sit amet dol. <FcLike className="icons" />
              </Card.Text>
              <Card.Text>
                {" "}
                <FcApproval className="icons" />
                Lorem ipsum dolor sit amet dol. <FcLike className="icons" />
              </Card.Text>
              <Card.Text>
                {" "}
                <FcApproval className="icons" />
                Lorem ipsum dolor sit amet dol. <FcLike className="icons" />
              </Card.Text>
              <Card.Text>
                {" "}
                <FcApproval className="icons" />
                Lorem ipsum dolor sit amet dol. <FcLike className="icons" />
              </Card.Text>
              <Card.Text>
                {" "}
                <FcApproval className="icons" />
                Lorem ipsum dolor sit amet dol. <FcLike className="icons" />
              </Card.Text>
            </Card.Body>
          </Card.Body>
          <Card.Text className="box_price_footer_one box_price_footer">
          Unidad
          </Card.Text>
        </Card>
        <Card style={{ width: "25rem" }} className="box-prices m-5">
          <Card.Body>
            <Card.Title className="box_price_title">
              <Card.Text>$68.99</Card.Text>
              <Card.Text className="box_price_unidad"></Card.Text>
            </Card.Title>
            <Card.Body className="box_price_body">
              <Card.Text>
                {" "}
                <FcApproval className="icons" />
                Lorem ipsum dolor sit amet dol. <FcLike className="icons" />
              </Card.Text>
              <Card.Text>
                {" "}
                <FcApproval className="icons" />
                Lorem ipsum dolor sit amet dol. <FcLike className="icons" />
              </Card.Text>
              <Card.Text>
                {" "}
                <FcApproval className="icons" />
                Lorem ipsum dolor sit amet dol. <FcLike className="icons" />
              </Card.Text>
              <Card.Text>
                {" "}
                <FcApproval className="icons" />
                Lorem ipsum dolor sit amet dol. <FcLike className="icons" />
              </Card.Text>
              <Card.Text>
                {" "}
                <FcApproval className="icons" />
                Lorem ipsum dolor sit amet dol. <FcLike className="icons" />
              </Card.Text>
            </Card.Body>
          </Card.Body>
          <Card.Text className="box_price_footer">Docenas</Card.Text>
        </Card>
      </div>
    </div>
  );
}

export default Prices;
