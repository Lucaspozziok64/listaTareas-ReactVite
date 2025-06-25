import ListGroup from "react-bootstrap/ListGroup";
import Itemtarea from "./ItemTarea";

const ListaTareas = ({tareas, borrarTarea}) => {
  return (
    <div>
      <ListGroup>
        {
          tareas.map((item, indice)=> <Itemtarea key={indice} nombreTarea={item} borrarTarea={borrarTarea}></Itemtarea>)
        }
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
