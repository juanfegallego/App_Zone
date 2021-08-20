
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import HeaderOff from './components/HeaderOff/HeaderOff';
import Profile from './containers/Profile/Profile';
import ProfileAdmin from './containers/ProfileAdmin/ProfileAdmin';
import Events from './containers/Events/Events';
import AllUsers from './containers/AllUsers/AllUsers';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <HeaderOff/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/register" exact component={Register}/> 
        <Route path="/login" exact component={Login}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/profileAdmin" exact component={ProfileAdmin}/>
        <Route path="/events" exact component={Events}/>
        <Route path="/allUsers" exact component={AllUsers}/>

      </Switch>   
      </BrowserRouter>
    </div>
  );
}

export default App;
