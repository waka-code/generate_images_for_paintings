import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import useGenerateImage from "./useGenerateImage";
import "./generateImage.css"
function GenerateImage() {
  const { img } = useGenerateImage();
  return (
    <Form className="box_GenerateImage container d-flex flex-column justify-content-center align-items-center">
      <div className="container d-flex w-100 gap-2 m-5 justify-content-center align-items-center">
        <TextField id="filled-basic" label="Search"type="text"  variant="filled" />
        <TextField id="filled-basic" label="width" type="text" variant="filled" />
        <TextField id="filled-basic" label="height" type="text" variant="filled" />
        <Button variant="dark" className="btn_generate">
          Search
        </Button>
      </div>

      <div className="container d-flex gap-2 m-2">
        {img.map((items) => {
          return <Image src={items} thumbnail className="w-50" />;
        })}
      </div>
    </Form>
  );
}
import { TextField } from "@mui/material";

export default GenerateImage;
