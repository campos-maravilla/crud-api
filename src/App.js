import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import { Formulario } from './components/Formulario';
import Crudapp from './components/Crudapp';
import Modales from './components/Modales';
import Pokemon from './components/Pokemon'
import TodoList from './components/TodoList';
import Memorizacion from './components/Memorizacion';
import ThemeContext from './components/ThemeContext';

import './App.css';
import { ThemeProvider } from './context/ThemeContext';


function App() {



  return (
    <ThemeProvider>


      <div className={`container-fluid p-3  d-flex flex-row `}>
        <Menu />
        <div className='container justify-content-center align-items-center'>
          <h1 className='text-center'>Ejercicios de React</h1>
          <Routes>
            <Route path='/themeContext' element={<ThemeContext />} />
            <Route path='/memorizacion' element={<Memorizacion />} />
            <Route path='/todolist' element={<TodoList />} />
            <Route path='/modal' element={<Modales />} />
            <Route path='/crudapp' element={<Crudapp />} />
            <Route path='/formulario' element={<Formulario />} />
            <Route path='/pokemon' element={<Pokemon />} />
            <Route path='*' element={<h2>Curso de React Practica de mauro</h2>} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
