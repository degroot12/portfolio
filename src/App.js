import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import NavComponent from './components/NavComponent';
import { Switch, Route, withRouter} from 'react-router-dom'
import Projects from './components/Projects';

function App() {
  return (
    <div >
    <Switch>
      <Home />
    </Switch>
      
    </div>
  );
}

export default withRouter(App);
