import { Button, ListGroup } from "react-bootstrap";

const Itemtarea = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">Tarea 1 <Button variant="danger">Borrar</Button></ListGroup.Item>
  );
};

export default Itemtarea;
