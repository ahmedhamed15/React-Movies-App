import React, {BrowserRouter as Router, Switch, Route} from "react";
import Header from "./Components/Layouts/Header";
import HomePage from "./Pages/HomePage";
import ShowPage from "./Pages/ShowPage";
import SearchPage from "./Pages/SearchPage";
function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/show/:id" component={ShowPage} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
