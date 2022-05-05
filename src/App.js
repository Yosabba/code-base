//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
//Router
import { Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
      <Redirect to="/" />
    </div>
  );
}

export default App;
