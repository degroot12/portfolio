import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavComponent from "./components/NavComponent";
import { Switch, Route, withRouter } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div>
      <Switch>
      <Route
          exact
          path="/"
          render={(routeProps) => {
            return <Home {...routeProps} />;
          }}
        />
        <Route
          path="/about"
          render={(routeProps) => {
            return <About {...routeProps} />;
          }}
        />
        
      </Switch>
    </div>
  );
}

export default withRouter(App);
