import React, { Fragment, useEffect, useState} from 'react';
import ClienteAxios from '../../config/axios';
import {Link} from 'react-router-dom';

    function Roles(){

        const[roles, guardarRoles] = useState([]);
        const ConsultarAPI = async () => {
            const RolesConsulta = await ClienteAxios.get('/roles');
            //COLOCAR STATE
            guardarRoles(RolesConsulta.data);
            console.log(roles);
        }
        useEffect( () => {
            ConsultarAPI();
        },[]);

        return (
            <Fragment>
            <h2>Roles</h2>

            <Link to ={"/nuevorol"} class="btn btn-verde nvo-rol"> <i class="fas fa-plus-circle"></i>
                Nuevo Rol
            </Link>

            <ul class="listado-roles">
            {roles.map(roles =>
                <li class="roles">
                <div class="info-roles">
                    <p class="nombre">{roles.Nombre}</p>
                </div>
                <div class="acciones">
                    <a href="#" class="btn btn-azul">
                        <i class="fas fa-pen-alt"></i>
                        Editar Rol
                    </a>
                    <button type="button" class="btn btn-rojo btn-eliminar">
                        <i class="fas fa-times"></i>
                        Eliminar Rol
                    </button>
                </div>
            </li>
            )}  
            </ul>
           </Fragment>
        )
    }
    export default Roles;