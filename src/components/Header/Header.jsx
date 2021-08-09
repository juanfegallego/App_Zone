import React from 'react';
import Button from '../Button/Button';
import { useHistory } from 'react-router-dom';
import { LOGOUT } from "../../redux/types";
import { connect } from "react-redux";


const Header = (props) => {
    let history = useHistory();
    const takeMe = (were) => {
        history.push(were);
    };
    const logOut = () => {
        props.dispatch({ type: LOGOUT })

    };

    if (props.credentials?.token !== "") {

        return (
          <div className="header">
            {/* <Search/> */}
            {/* <div>
              <img className="logo" alt="logo" src={logo } width="50px" />
            </div> */}
            <div className="text">
              <Button lugar="/" destino="Home" onClick={() => takeMe("/")} />
    
              <div onClick={() => takeMe("/profile")}>
                <img className="imgUser" src={props.credentials.user.imgUser} alt="imgUser"/>
              </div>
    
              <div onClick={() => logOut("/")}>
                <Button lugar="/" destino="LogOut"></Button>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="header">
            {/* <div>
              <img className="logo" alt="logo" src={logo} width="50px" />
            </div> */}
            <div className="text">
              <Button lugar="/" destino="Home" onClick={() => takeMe("/")}></Button>
    
              <Button
                lugar="/register"
                destino="Registro"
                onClick={() => takeMe("/")}
              ></Button>
    
              <Button
                lugar="/login"
                destino="Login"
                onClick={() => takeMe("/login")}
              />
            </div>
          </div>
        );
      }
};
export default connect((state) => ({ credentials: state.credentials }))(Header);
