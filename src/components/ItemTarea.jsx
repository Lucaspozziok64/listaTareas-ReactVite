import { Button, ListGroup } from "react-bootstrap";

const Itemtarea = ({nombreTarea, borrarTarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">{nombreTarea}<Button variant="danger" onClick={()=> borrarTarea(nombreTarea)}>Borrar</Button></ListGroup.Item>
  );
};

export default Itemtarea;
