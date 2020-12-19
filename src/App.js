import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./styles/main.css"
import './App.css';

import LandingPage from "./pages/Landing.js"
import Artworks from './pages/Artworks.js'
import TrophyCase from './pages/TrophyCase.js'
import About from './sections/About.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/trophy">
          <TrophyCase />
        </Route>
        <Route path="/artworks">
          <Artworks />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
