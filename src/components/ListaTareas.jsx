import ListGroup from "react-bootstrap/ListGroup";
import Itemtarea from "./Itemtarea";

const ListaTareas = ({tareas}) => {
  return (
    <div>
      <ListGroup>
        {
          tareas.map((item, indice)=> <Itemtarea key={indice} nombreTarea={item}></Itemtarea>)
        }
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
