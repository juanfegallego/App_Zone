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
            <div>
                <div>
                    <table class="table table-dark container-fluid">
                        <thead>
                            <tr>
                                <th scope="col-3">Name</th>
                                <th scope="col-3">Surname</th>
                                <th scope="col-3">Rol</th>
                                <th scope="col-3">email</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="vistaUser">
                        {users?.map((user) => {
                            return (
                                // <div className="bodyUser" key={user._id}>
                                //     <div className="cardUser">
                                //         <div className="textUser">
                                //             <h1>{user.name}</h1>
                                //             <p> {user.surname}</p>
                                //         </div>
                                //     </div>
                                // </div>
                                    <table class=" table table-hover " key={user._id}>
                                            <tbody >
                                                <tr class="align-middle">
                                                    <td class="col-3">{user.name}</td>
                                                    <td class="col-4">{user.surname}</td>
                                                    <td class="col-2">{user.role}</td>
                                                    <td class="col-6">{user.email}</td>
                                                </tr>
                                            </tbody>
                                    </table>

                            )
                        })}

                    </div>
                </div>
            </div>

        )

    }


}

export default connect((state) => ({
    users: state.users,
    credentials: state.credentials,

}))(Users);

