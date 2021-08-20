import React, { useState, useEffect } from "react";
import { EVENT } from "../../redux/types";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router";







const Users = (props) => {
    let history = useHistory();

    const [users, setUsers] = useState([]);

    useEffect(() => {

        getUsers()

    }, [])

    const getUsers = async () => {
        try {
            let res = await axios.get(`http://localhost:3005/user/allUsers`);
            //GUARDANDO EN REDUX
            // props.dispatch({ type: ---, payload: res.data });
            console.log(res.data);
            setUsers(res.data)
        } catch (error) {
            console.log(error);
        }
    };





    if (users === undefined) {
        return (
            <div>
                cargando
            </div>
        )
    } else {
        return (
            <div className="vistaUser">
                {users?.map((user) => {
                    return (
                        //   <div className="bodyUser" key={user._id}>
                        //   <div className="cardUser">
                        //     <div className="textUser">
                        //       <h1>{user.name}</h1>
                        //       <p> {user.surname}</p>
                        //     </div>
                        //   </div>
                        // </div> 
                        <table class="table table-hover align-middle" key={user._id}>
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">Nº</th>
                                    <th scope="col">name</th>
                                    <th scope="col">Surname</th>
                                    <th scope="col">Role</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                  <th scope="row"><td>{user._id}</td></th>
                                  <td>{user.name}</td>
                                  <td>{user.surname}</td>
                                  <td>{user.role}</td>
                                </tr>

                                </tbody>
                        </table>
                    )
                })}

            </div>

        )

    }


}

export default connect((state) => ({
    users: state.users,
    credentials: state.credentials,

}))(Users);

