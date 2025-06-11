import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ListaTareas from './ListaTareas';

const FormularioTareas = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Ingresa una tarea" />
          <Button variant='primary'>Enviar</Button>
        </Form.Group>
      </Form>
      <ListaTareas />
    </div>
  );
};

export default FormularioTareas;
