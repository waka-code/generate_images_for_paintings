import "../../../App.css";
import Card from "react-bootstrap/Card";
import useModel from "./useModel";
function Models() {
  const { pageNumbers } = useModel();
  return (
    <div className="box_models d-grid gap-1 align-items-center mt-5 container">
      {pageNumbers.length === 0 ? (
        <h4 className="d-flex align-items-center justify-content-center border">
          Aun no hay imagenes
        </h4>
      ) : (
        pageNumbers.map((cars) => {
          return (
            <Card className="box_img_card " style={{ width: "19rem" }}>
              <Card.Img variant="top" src={cars} />
            </Card>
          );
        })
      )}
    </div>
  );
}

export default Models;
