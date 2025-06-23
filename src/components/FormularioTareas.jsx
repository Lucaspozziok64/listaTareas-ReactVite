import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ListaTareas from './ListaTareas';
import { useState } from 'react';

const FormularioTareas = () => {
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Aqui deberia guardar la tarea');
    //Tomar la tarea que esta en el state taras guardar en el state taras (arrays)
    setTareas([...tareas, tarea])
    //Limpiar el formulario
    setTarea('')
  }

  const borrarTarea = (nombreTarea) => {
    const tareasFiltradas = tareas.filter((item)=> item !== tarea)
    //Actualizar el estado tareas
    setTareas(tareasFiltradas)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Ingresa una tarea" onChange={(e)=> setTarea(e.target.value)} value={tarea}/>
          <Button variant='primary' type='submit'>Enviar</Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}/>
    </div>
  );
};

export default FormularioTareas;
