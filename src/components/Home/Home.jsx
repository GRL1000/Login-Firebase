import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function Salir() {
  return auth.signOut();
  navigate("/");
}

function Home(props) {
  return (
    <div>
      <div>
        <div>
          <h1>
            <Link to="/login">Login</Link>
          </h1>
          <br />
          <h1>
            <Link to="/signup">Registrarse</Link>
          </h1>
        </div>
      </div>
      <h2>{props.name?`Bienvenido - ${props.name}`: "Inicie Sesión"}</h2>
      <button onClick={Salir}>Cerrar Sesión</button>
    </div>
  );
}

export default Home;
