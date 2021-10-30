import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Index />} />
      </Switch>
    </>
  );
}

export default App;
