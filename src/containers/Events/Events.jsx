import React, { useState, useEffect } from "react";
import { EVENT } from "../../redux/types";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Statistic } from 'antd';






const Events = (props) => {
  let history = useHistory();

  const [events, setEvents] = useState([]);

  useEffect(() => {

    getEvent()

  }, [])

//   const reservas = () => {
//     props.dispatch({ type: EVENT, payload: events });

//     // setTimeout(() => {
//     //   history.push('/bookings')

//     // }, 500);
//   }




  const getEvent = async () => {
    try {
      let res = await axios.get(`http://localhost:3005/event`);
      //GUARDANDO EN REDUX
      // props.dispatch({ type: REST, payload: res.data });
      setEvents(res.data)
    } catch (error) {
      console.log(error);
    }
  };

     const deleteEvent = async (event) => {

    let token = props.credentials?.token;
    let id = props.credentials?.user._id;

    let body = {
        userId: id,
        id: event._id
    }
    console.log(event._id);
    await axios.post('http://localhost:3005/event/adminDelete', body, { headers: { 'authorization': 'Bearer ' + token } })

    window.location.reload();

}



  if (events === undefined) {
    return (
      <div>
        cargando
      </div>
    )
  } else {
    return (
      <div className="vistaEvent">
        {events?.map((event) => {
          return (
              <div className="bodyEvent" key={event._id}>
              <div className="cardEvent">
                <img className="imgEvent" src={event.imgEvent} alt="imgEvent" />
                <div className="textEvent">
                <div className="buttonDelete" onClick={() => deleteEvent(event)}>DELETE</div>
                  <h1>{event.name}</h1>
                  <p> Tipo de evento: {event.typeEvent}</p>
                  <p> Direccion: {event.addres}</p>
                  <p>Aforo: {event.capacity}</p>
                  <p> <Statistic title="Aforo2" value={33} suffix={event.capacity} /></p>
                </div>
              </div>
            </div> 
          )
        })}

      </div>

    )

  }


}

export default connect((state) => ({
  events: state.events,
  credentials: state.credentials,

}))(Events);

