import React, {BrowserRouter as Router, Switch, Route} from "react";
import Header from "./Components/Layouts/Header";
import HomePage from "./Pages/Homepage";
import ShowPage from "./Pages/ShowPage";
function App() {
  return (
    <>
      <Router basename="/#">
        <Header />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/show/:id" component={ShowPage} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
