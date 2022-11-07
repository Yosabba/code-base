//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
import PcGames from "./pages/platforms/PC";
import Playstation from "./pages/platforms/Playstation";
import Xbox from "./pages/platforms/Xbox";
import Nintendo from "./pages/platforms/Nintendo";
import Ios from "./pages/platforms/Ios";
import Web from "./pages/platforms/Web";
//Genres
import Action from "./pages/genres/Action";
import Adventure from "./pages/genres/Adventure";
import Puzzle from "./pages/genres/Puzzle";
import Sports from "./pages/genres/Sports";
import Strategy from "./pages/genres/Strategy";
import Rpg from "./pages/genres/Rpg";
import Shooter from "./pages/genres/Shooter";
import Simulation from "./pages/genres/Simulation";
import Indie from "./pages/genres/Indie";
import Platformer from "./pages/genres/Platformer";
import { Route, Redirect } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Nav />
      <Route path={["/game/:id", "/"]} exact>
        <Home />
      </Route>
      <Route path="/pc" exact>
        <PcGames />
      </Route>
      <Route path="/playstation" exact>
        <Playstation />
      </Route>
      <Route path="/xbox" exact>
        <Xbox />
      </Route>
      <Route path="/nintendo" exact>
        <Nintendo />
      </Route>
      <Route path="/ios" exact>
        <Ios />
      </Route>
      <Route path="/web" exact>
        <Web />
      </Route>
      <Route path="/action" exact>
        <Action />
      </Route>
      <Route path="/adventure" exact>
        <Adventure />
      </Route>
      <Route path="/puzzle" exact>
        <Puzzle />
      </Route>
      <Route path="/role-playing-games-rpg" exact>
        <Rpg />
      </Route>
      <Route path="/sports" exact>
        <Sports />
      </Route>
      <Route path="/strategy" exact>
        <Strategy />
      </Route>
      <Route path="/shooter" exact>
        <Shooter />
      </Route>
      <Route path="/indie" exact>
        <Indie />
      </Route>
      <Route path="/simulation" exact>
        <Simulation />
      </Route>
      <Route path="/platformer" exact>
        <Platformer />
      </Route>
      <Redirect to="/" />
    </div>
  );
}

export default App;
