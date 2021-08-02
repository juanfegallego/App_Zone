
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/register" component={Register}/> 
        <Route path="/login" component={Login}/>

      </Switch>   
      </BrowserRouter>
    </div>
  );
}

export default App;
