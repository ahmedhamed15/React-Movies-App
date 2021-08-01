import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Components/Layouts/Header";
import HomePage from "./Pages/HomePage";
import ShowPage from "./Pages/ShowPage";
import SearchPage from "./Pages/SearchPage";
import ShowsContext from "./Context/ShowsContext";
function App() {

  const [title, changeTitle] = useState(initialState)

  return (
    <>
      <ShowsContext.Provider value={{ title, changeTitle }}>
        <Router basename="/#">
          <Header />

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/show/:id" component={ShowPage} />
          </Switch>

        </Router>
      </ShowsContext.Provider>
    </>
  );
}

export default App;
