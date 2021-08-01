import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Components/Layouts/Header";
import HomePage from "./Pages/HomePage";
import ShowPage from "./Pages/ShowPage";
import SearchPage from "./Pages/SearchPage";
import { useShows } from "./Context/ShowsContext";
function App() {
  
  return (
    <>
    <useShows>
      <Router basename="/#">
        <Header />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/show/:id" component={ShowPage} />
        </Switch>

      </Router>
    </useShows>
    </>
  );
}

export default App;
