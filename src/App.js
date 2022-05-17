//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
import PcGames from "./pages/platforms/PC";
import Playstation from "./pages/platforms/Playstation";
import Xbox from "./pages/platforms/Xbox";
import Nintendo from "./pages/platforms/Nintendo";
import Ios from "./pages/platforms/Ios";
import Web from "./pages/platforms/Web";
import Action from "./pages/genres/Action"
//Router
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
      <Redirect to="/" />
    </div>
  );
}

export default App;
