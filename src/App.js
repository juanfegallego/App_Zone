
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>   
      </BrowserRouter>
    </div>
  );
}

export default App;
