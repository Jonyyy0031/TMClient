import React, { Fragment, useEffect, useState } from "react";
import ClienteAxios from "../../config/axios";

function NuevoUsuario(){

    const[roles, guardarRoles] = useState([]);
    const ConsultarAPI = async () => {
        const RolesConsulta = await ClienteAxios.get('/roles');

        guardarRoles(RolesConsulta.data);
    }
    useEffect(() => {
        ConsultarAPI();
    },[]);

    /**codigo para validar formulario */

    const [usuario, guardarUsuarios] = useState({
        action:'',
        ID_Rol:'',
        Username:'',
        Password:''  
    })

    const actualizarState = e =>{
     
        guardarUsuarios({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }


    return(
      <Fragment>
        <h2>Nuevo Usuario</h2>

        <form  method="POST">
            <legend>Llena todos los campos</legend>

            <div class="campo">
                <label>Rol:</label>
                <select name="ID_Rol">
                    <option value="">Selecciona una opcion</option>
                    {roles.map (roles =>
                        <option value={roles.id}>{roles.Nombre}</option>)}
                </select>
            </div>

            <div class="campo">
                <label>Username:</label>
                <input type="text" placeholder="Username" name="Username"/>
            </div>

            <div class="campo">
                <label>Password:</label>
                <input type="password" placeholder="Contraseña" name="Password"/>
            </div>

            <div class="enviar">
                    <input type="submit" class="btn btn-azul" value="Agregar Usuario"/>
            </div>

        </form>
      </Fragment>
    )
}

export default NuevoUsuario;