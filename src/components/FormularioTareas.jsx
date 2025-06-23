import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ListaTareas from './ListaTareas';
import { useState, useEffect } from 'react';

const FormularioTareas = () => {
  const [tarea, setTarea] = useState('')
  const tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || []
  const [tareas, setTareas] = useState(tareasLocalStorage)

  useEffect(()=> {
    //Todas las lienas que escriba aqui se ejecutan automaticamente en montaje y actualizacion del componente
    console.log('desde useEffect');
    localStorage.setItem('listaTareas', JSON.stringify(tareas))
  }, [tareas])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Aqui deberia guardar la tarea');
    //Tomar la tarea que esta en el state taras guardar en el state taras (arrays)
    setTareas([...tareas, tarea])
    //Limpiar el formulario
    setTarea('')
  }

  const borrarTarea = (nombreTarea) => {
    const tareasFiltradas = tareas.filter((item)=> item !== nombreTarea)
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
