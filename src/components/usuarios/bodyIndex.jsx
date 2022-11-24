import Table from "../table/Table";
import MainPage from "../table/MainPage";
import CreateButton from "../table/CreateBotton";
import SearchBar from "../table/SearchBar";
import { Link } from "react-router-dom";
import getUsuario from "../../assets/js/getData"
import {getData} from "../../assets/js/getData";
import { useEffect } from "react";
import backendConfig from "../../config";



let objCss = {
    border: "6px solid red",
};

function UsuariosIndex(props) {
   // let datosTabla = getData("url", {}, "get", {});
    //procesar datos
    return (
      <div>
        <div id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <Link to={"/"}>Inicio</Link>
              </li>
              <li>Administración</li>
            </ol>
            <h2>Bienvenido Administrador</h2>
            <p>
              Aqui podrás administrar la información de locutores y usuarios
            </p>
            <img src={require("../../assets/img/logo/user2.png")} alt="" />
          </div>
        </div>
        {/* <h2>Usuarios - Locutores</h2> */}

        <MainPage
                data={props.datosTabla}
                path={"/usuarios"}
                name={"Tabla de Usuarios"}
                columns={["_id", "firstName", "email", "username", "password"]}
                columnsAlias={[
                    "ID",
                    "Nombre",
                    "Correo",
                    "Usuario",
                    "Contrasena",
                ]}
                tools={["update", "delete"]}
            />
        {/* <div classNameNameName="d-flex">
                <div classNameName="col-6">
                    <Table />
                </div>
                <div classNameName="col-6">
                    <Table />
                </div>
            </div> */}
      </div>
    );
}

export default UsuariosIndex;
