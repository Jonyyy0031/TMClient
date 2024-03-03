import React, { Fragment, useEffect, useState} from 'react';
import ClienteAxios from '../../config/axios';
import {Link} from 'react-router-dom';

    function Usuarios(){

        const[usuarios, guardarUsuarios] = useState([]);
        const ConsultarAPI = async () => {
            const UsuariosConsulta = await ClienteAxios.get('/usuarios');
            //COLOCAR STATE
            guardarUsuarios(UsuariosConsulta.data);
            console.log(usuarios);
        }
        useEffect( () => {
            ConsultarAPI();
        },[]);

        return (
            <Fragment>
            <h2>Usuarios</h2>

            <Link to ={"/nuevousuario"} class="btn btn-verde nvo-usuario"> <i class="fas fa-plus-circle"></i>
                Nuevo Usuario
            </Link>

            <ul class="listado-usuarios">
            {usuarios.map(usuarios =>
                <li class="usuarios">
                <div class="info-usuarios">
                    <p class="Username">{usuarios.Username}</p>
                    <p class="Password">{usuarios.Password}</p>
                </div>
                <div class="acciones">
                    <a href="#" class="btn btn-azul">
                        <i class="fas fa-pen-alt"></i>
                        Editar Usuario
                    </a>
                    <button type="button" class="btn btn-rojo btn-eliminar">
                        <i class="fas fa-times"></i>
                        Eliminar Usuario
                    </button>
                </div>
            </li>
            )}  
            </ul>
           </Fragment>
        )
    }
    export default Usuarios;