import React from 'react';
//para ruteo performance
import {Link} from 'react-router-dom';
function Navigation(){
    return (
    <aside class="sidebar col-3">
        <h2>Administración</h2>

        <nav class="navegacion">
            <Link to="/ " class="usuarios">Usuarios</Link>
            <Link to="/roles" class="roles">Roles</Link>
            <Link to="/tareas" class="tareas">Tareas</Link>
        </nav>
    </aside>
    )
}
export default Navigation;