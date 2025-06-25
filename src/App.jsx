import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioTareas from './components/FormularioTareas';

function App() {

  return (
    <>
      <main className='container my-4'>
        <h1 className='text-center'>Lista de Tareas</h1>
        <section className='container'>
          <FormularioTareas />
        </section>
      </main>
      <footer className='bg-dark text-light text-center'>
        <p className='mb-0'>&copy; Todos los derechos reservados</p>
        <p className='mb-0'>Desarrollado por <a href="http://">Lucas Figueroa</a></p>
      </footer>
    </>
  )
}

export default App
