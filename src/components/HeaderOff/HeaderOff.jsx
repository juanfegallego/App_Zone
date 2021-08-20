import React from 'react'
import Button from '../Button/Button';
import { useHistory } from 'react-router-dom';
import { LOGOUT } from "../../redux/types";
import { connect } from "react-redux";
import {LogoutOutlined} from '@ant-design/icons';

const HeaderOff = (props) => {
    let history = useHistory();
    const takeMe = (were) => {
        history.push(were);
    };
    const logOut = () => {
        props.dispatch({ type: LOGOUT })
        history.push('/login');
    };
    if (props.credentials?.token !== "") {
      return (
        <nav class="navbar navbar-light bg-light fixed-top ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ZONE APP</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body offText">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <Button className="nav-link" lugar="/" destino="Inicio" onClick={() => takeMe("/")} />
                </li>
                <li class="nav-item">
                <Button lugar="/events" destino="Eventos" onClick={() => takeMe("/events")}/>
                </li>
                <li class="nav-item">
                <Button lugar="/profile" destino="Perfil" onClick={() => takeMe("/profile")}/>
                </li>
                <li class="nav-item" onClick={() => logOut("/login")}>
                </li>
                <li className="nav-item "  >
                    <LogoutOutlined className="logout" lugar="/" destino="home" onClick={() => logOut("/")} />
                    </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      );
      }else{
     return (
        <nav class="navbar navbar-light bg-light fixed-top ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ZONE APP</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body offText">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <Button className="nav-link" lugar="/" destino="Inicio" onClick={() => takeMe("/")} />
                </li>
                <li class="nav-item">
                <Button lugar="/login" destino="Acceder" onClick={() => takeMe("/login")}/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
     );
      }
}

export default connect((state) => ({ credentials: state.credentials })) (HeaderOff);