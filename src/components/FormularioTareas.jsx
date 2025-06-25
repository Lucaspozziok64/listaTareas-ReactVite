import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const FormularioTareas = () => {
  const tareasLocalStorage =
    JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [tareas, setTareas] = useState(tareasLocalStorage);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    //Todas las lienas que escriba aqui se ejecutan automaticamente en montaje y actualizacion del componente
    console.log("desde useEffect");
    localStorage.setItem("listaTareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTareas = (data) => {
    console.log("Aqui deberia guardar la tarea");
    console.log(data.inputTarea);
    //Tomar la tarea que esta en el state taras guardar en el state taras (arrays)
    setTareas([...tareas, data.inputTarea]);
    //Limpiar el formulario
    reset();
  };

  const borrarTarea = (nombreTarea) => {
    const tareasFiltradas = tareas.filter((item) => item !== nombreTarea);
    //Actualizar el estado tareas
    setTareas(tareasFiltradas);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(agregarTareas)} className="mb-4 formulario">
        <h3 className="text-center text-white">Ingresa tus tareas</h3>
        <Form.Group className="mb-2 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            onChange={(e) => setTarea(e.target.value)}
            {...register("inputTarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 3,
                message: "La tarea debe tener 3 caracteres como minimo",
              },
              maxLength: {
                value: 50,
                message: "La tarea debe contener como maximo 50 caracteres",
              },
              pattern: {
                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]{1,50}$/,
                message:
                  "La tarea debe contener caracteres alfanumericos mayusculas o minusculas",
              },
            })}
          />
          <button type="submit" className="mx-2 botonEnviar">
            Enviar
          </button>
        </Form.Group>
        <Form.Text className="bg-danger text-white">
          {errors.inputTarea?.message}
        </Form.Text>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea} />
    </div>
  );
};

export default FormularioTareas;
