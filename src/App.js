import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './components/Menu';
import { Formulario } from './components/Formulario';

import Crudapp from './components/Crudapp';



function App() {

  return (
    <div className="container-fluid p-3 text-center d-flex flex-row ">
      <Menu />
      <div className='container justify-content-center align-items-center'>
        <h1>Ejercicios de React</h1>
        <Routes>
          <Route path='/crudapp' element={<Crudapp />} />


          <Route path='/formulario' element={<Formulario />} />
          <Route path='*' element={<h2>Curso de React Practica de mauro</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
