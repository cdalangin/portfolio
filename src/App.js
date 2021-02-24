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
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
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
      </ScrollToTop>
    </Router >
  );
}

export default App;
