import "./App.css";
import Home from "./components/pages/Home/Home";
import Access from "./components/pages/Access/Access";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login/register" exact component={Access} />
      </Switch>
    </Router>
  );
}

export default App;
