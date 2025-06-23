import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioTareas from './components/FormularioTareas';

function App() {

  return (
    <>
      <main className='container my-4'>
        <h1 className='text-center'>Lista de Tareas</h1>
        <FormularioTareas />
      </main>
      <footer className='bg-dark text-light text-center py-3'>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
