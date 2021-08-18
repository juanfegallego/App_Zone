import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import axios from "axios"
import { LOGIN } from "../../redux/types"
import Button from '../../components/Button/Button';
import imageLogin from '../../components/img/login.jpg';


const Login = (props) => {
  let history = useHistory();
  // Hooks
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const [msgError, setMensajeError] = useState("");

  const [errorLogin, setErrorLogin] = useState({
    eEmail: "",
    ePassword: "",
  });

  const takeMe = (were) => {
    history.push(were);
};

  //Handlers
  const updateCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const checkLogin = (arg) => {
    switch (arg) {
      case "email":
        if (
          !/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(
            credentials.email
          )
        ) {
          setErrorLogin({
            ...errorLogin,
            eEmail: "El email introducido no es valido ejemplo@ejemplo.com",
          });
        } else {
          setErrorLogin({ ...errorLogin, eEmail: "" });
        }
        break;
      case "password":
        if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
            credentials.password
          )
        ) {
          setErrorLogin({
            ...errorLogin,
            ePassword:
              "La contraseña debe contener como mínimo 8 caracteres, mayúsculas, minúsculas y un número",
          });
        } else {
          setErrorLogin({ ...errorLogin, ePassword: "" });
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => { }, []);

  const logeame = async () => {
    //Primero, testeamos los datos

    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        credentials.email
      )
    ) {
      setMensajeError("Introduce un correo Valido");
      return;
    }

    //A continuación, generamos el body de datos
    let body = {
      email: credentials.email,
      password: credentials.password,
    };

    //Axios..envio
    try {

      let res = await axios.post("http://localhost:3005/user/login", body);
      

    
      let data = {
        token: res.data.token,
        user: res.data.user,
        idUser: res.data.user._id,
      };
      console.log(res.data.user)

      props.dispatch({ type: LOGIN, payload: data });


      // setTimeout(() => {
      //   history.push("/profile");
      // }, 0);

      if (res.data.user.role === "Customer") {
        history.push('/profile')
      } else {
        history.push('/profileAdmin')
      }
    } catch (err) {
      setMensajeError(err);
    }

    //res viene de vuelta con el token y los datos
  };

  return (
      <div className="vistaLogin">
        <pre>{JSON.stringify(credentials, null,2)}</pre>
        <div className="loginCard">
          <input
            className="inputLogin"
            name="email"
            title="email"
            placeholder="Email"
            onChange={updateCredentials}
            onBlur={() => checkLogin("email")}
            lenght="30"
          />
          <div className="error">{errorLogin.eEmail}</div>
          <input
            className="inputLogin"
            type="password"
            name="password"
            title="password"
            placeholder="Password"
            onChange={updateCredentials}
            onBlur={() => checkLogin("password")}
            lenght="30"
          />
          <div className="error">{errorLogin.ePassword}</div>

          <div className="sendButton" type="submit" onClick={() => logeame()} >Acceder</div>
          <div>¿Aún no tienes una cuenta?</div>
          <div>Únete ahora</div>
          <Button lugar="/register" destino="Registro" onClick={() => takeMe("/")}></Button>
          <div>{msgError}</div>
        </div>
        <div className="loginRight"> <img className="imageLogin" src={imageLogin} alt="people" /></div>
      </div>
  )
}

export default connect()(Login)
