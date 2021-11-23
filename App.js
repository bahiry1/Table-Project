import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SingleUser from "./SingleUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/userdetails">
            <SingleUser />
          </Route>
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
