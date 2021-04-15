import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import NavComponent from './components/NavComponent';
import { Switch, Route, withRouter} from 'react-router-dom'
import Projects from './components/Projects';

function App() {
  return (
    <div>


    <div className="App">
    <Switch>
      <Route exact path='/' render={(routeProps) => {
        return <Home {...routeProps} />
      }}
      />
      <Route path='/projects' render={(routeProps) => {
        return <Projects {...routeProps} />
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
