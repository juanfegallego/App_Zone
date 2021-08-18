import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import {LogoutOutlined, CalendarOutlined} from '@ant-design/icons';
import { LOGOUT } from "../../redux/types";


function ProfileAdmin(props) {
    let history = useHistory();
    const { Header, Footer, Sider, Content } = Layout;
    
    const takeMe = (were) => {
        history.push(were);
    };
    const logOut = () => {
        props.dispatch({ type: LOGOUT })
    };

    if (props.credentials?.user.token !== '') {
        return (
            
            <Layout className="layoutAdmin" break >
                    <Sider className="menuLeft" >
                    <li className="nav-item">
                    <CalendarOutlined className="events" />
                    </li>
                    <li className="nav-item "  onClick={() => logOut("/login")}>
                    <LogoutOutlined className="logout" lugar="/login" destino="LogOut" />
                    </li>
                    
                    </Sider>
                    <Layout>
                        <Content>
                        <div className="bodyProfileAdmin">
                <h1>soy ADMIN</h1>
                <div className="cardProfileAdmin">
                    <div className="profileAdmin"> <img className="imgProfile" src={props.credentials.user.imgUser} alt="profile" /></div>
                    {console.log(props.credentials.user)}
                    <div className="textProfileAdmin">
                        <div className="adminName">{props.credentials.user.name}</div>
                        <div className="adminSurname">{props.credentials.user.surname}</div>
                        <div className="adminEmai">{props.credentials.user.email}</div>

                    </div>
                </div>
                <div className="allRents">


                </div>
            </div>
                        </Content>
                        <Footer>App Zone® made by Juanfe Gallego </Footer>
                    </Layout>
            </Layout>

        )
    } else {
        setTimeout(() => {
            history.push("/login");
        }, 3000)
        return (
            <div>NO ESTAS LOGEADO, NO PUEDES ENTRAR AQUI</div>
        )
    }
}
export default connect((state) => ({ credentials: state.credentials }))(ProfileAdmin);