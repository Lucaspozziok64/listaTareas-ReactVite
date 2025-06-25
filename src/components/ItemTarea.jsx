import { Button, ListGroup } from "react-bootstrap";

const Itemtarea = ({nombreTarea, borrarTarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between mb-2"><p className="mb-0 d-flex justify-content-center align-items-center"><strong>✍️ {nombreTarea}</strong></p><Button variant="danger" onClick={()=> borrarTarea(nombreTarea)}>Borrar</Button></ListGroup.Item>
  );
};

export default Itemtarea;
