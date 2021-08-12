
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Header from './components/Header/Header';
import HeaderOff from './components/HeaderOff/HeaderOff';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
      {/* <Header/> */}
      <HeaderOff/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/register" exact component={Register}/> 
        <Route path="/login" exact component={Login}/>

      </Switch>   
      </BrowserRouter>
    </div>
  );
}

export default App;
