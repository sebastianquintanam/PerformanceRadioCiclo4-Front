import { Link } from "react-router-dom";

function CreateUsuario(props) {
    return (
        <div className="col-12 w-75 mx-auto">
             <div id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <Link to={"/"}>Inicio</Link>
              </li>
              <li>Administración</li>
            </ol>
            <h2>Crear Usuario</h2>
            <p>
              Aqui podrás crear locutores y usuarios
            </p>
            <img src={require("../../assets/img/logo/user2.png")} alt="" />
          </div>
        </div>
            {/* <h3>Pagina: Crear Usuario</h3> */}
            <form>
                <div class="row g-3">
                    <div class="">
                        <label for="firstName" class="form-label">
                            Nombre
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            placeholder="Nombre de la persona"
                            defaultValue=""
                            required={true}
                            minLength={4}
                        />
                    </div>

                    <div class="col-12">
                        <label for="username" class="form-label">
                            Nombre de Usuario
                        </label>
                        <div class="input-group has-validation">
                            <span class="input-group-text">@</span>
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                placeholder="Username"
                                defaultValue=""
                                required={true}
                                minLength={4}
                            />
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="email" class="form-label">
                            Correo
                        </label>
                        <input
                            type={"email"}
                            class="form-control"
                            id="email"
                            placeholder="ejemplo@dominio.com"
                            defaultValue=""
                            required={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="password" class="form-label">
                            Contraseña:
                        </label>
                        <input
                            type={"password"}
                            class="form-control"
                            id="password"
                            defaultValue=""
                            required={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="password2" class="form-label">
                            Repita la Contraseña:
                        </label>
                        <input
                            type={"password"}
                            class="form-control"
                            id="password2"
                            defaultValue=""
                            required={true}
                        />
                    </div>

                    <hr class="my-4" />

                    <button
                        class="w-100 btn btn-primary btn-lg"
                        type="submit"
                        onClick={onClickSubmit}
                    >
                        Crear
                    </button>
                </div>
                <br />
            </form>
        </div>
    );
}

function onClickSubmit(e) {
    console.log(e);
}

export default CreateUsuario;
