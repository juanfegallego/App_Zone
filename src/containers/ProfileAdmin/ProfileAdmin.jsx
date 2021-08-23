import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { LogoutOutlined, CalendarOutlined, LineChartOutlined, TeamOutlined } from '@ant-design/icons';
import { LOGOUT } from "../../redux/types";
import AllUsers from '../AllUsers/AllUsers';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Events from '../Events/Events';


function ProfileAdmin(props) {
    let history = useHistory();
    const { Header, Footer, Sider, Content } = Layout;

    const takeMe = (were) => {
        history.push(were);
    };
    const logOut = () => {
        props.dispatch({ type: LOGOUT })
        history.push('/login');
    };



    if (props.credentials?.user.token !== '') {
        return (

            <Layout className="layoutAdmin" break >
                <Sider className="menuLeft" >
                    <div className="nav-left">
                        <CalendarOutlined className="events" onClick={() => takeMe("/events")} /> EVENTOS
                    </div>
                    <div className="nav-left">
                        <LineChartOutlined className="chart" onClick={() => takeMe("/")} /> GRAFICOS
                    </div>
                    <div className="nav-left">
                        <TeamOutlined className="users" onClick={() => takeMe("/allUsers")} /> USUARIOS
                    </div>
                    <div className="nav-left"  >
                        <LogoutOutlined className="logout" lugar="/" destino="home" onClick={() => logOut("/")} /> LOGOUT
                    </div>
                </Sider>
                <Layout>
                    <Content>
                        <div className="bodyProfileAdmin">
                            <div className="cardProfileAdmin">
                                {/* <div className="profileAdmin"> <img className="imgProfile" src={props.credentials.user.imgUser} alt="profile" /></div> */}
                                <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}icon={<UserOutlined />}/>
                                <div className="textProfileAdmin">
                                    <div className="adminName">{props.credentials.user.name}</div>
                                    <div className="adminSurname">{props.credentials.user.surname}</div>
                                    <div className="adminEmai">{props.credentials.user.email}</div>
                                </div>
                            </div>
                            <div className="vistaRight">
                            <h2>Usuarios registrados</h2>
                                <AllUsers />
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