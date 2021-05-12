import { Route, Switch } from 'react-router';
import './App.css';
import NotFound from './Pages/404Page/NotFound';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/" component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
