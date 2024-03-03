import React,{Fragment} from 'react';
import Header from '../src/componentes/layout/Header.js';
import Navigation from './componentes/layout/Navigation';
import Usuarios from './componentes/usuarios/usuarios';
import Roles from './componentes/roles/roles';
import Tareas from './componentes/tareas/tareas';
import Subtareas from './componentes/subtareas/subtareas';
import { BrowserRouter  as Router,Routes, Route } from 'react-router-dom';
import NuevoUsuario from './componentes/usuarios/nuevousuario';

function App() {
  return (
    
    <Router>

      <Fragment>
        <Header />

        <div class="grid contenedor contenido-principal">          
          <Navigation/>
          <main class="caja-contenido col-9">
          
          <Routes>
            <Route path='/nuevousuario' element={<NuevoUsuario/>}/>
            <Route path="/" element={<Usuarios/>} />
            <Route path="/roles" element={<Roles/>} />
            <Route path="/tareas" element={<Tareas/>} />
            <Route path="/suntareas" element={<Subtareas/>} />
          </Routes>

          </main>
        </div>
      </Fragment>


    </Router>
   
  );
}
export default App;
