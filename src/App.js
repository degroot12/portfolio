import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import NavComponent from './components/NavComponent';
import { Switch, Route, withRouter} from 'react-router-dom'

function App() {
  return (
    <div>
<NavComponent />

    <div className="App">
    <Switch>
      <Route exact path='/' render={(routeProps) => {
        return <Home {...routeProps} />
      }}
      />
      <Route path='/contact' render={(routeProps) => {
        return <Contact {...routeProps} />
      }}
      />
    </Switch>
    </div>
    </div>
  );
}

export default withRouter(App);
