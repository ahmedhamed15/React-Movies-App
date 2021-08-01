import React, {BrowserRouter as Router, Switch, Route} from "react";
import Header from "./Components/Layouts/Header";
import HomePage from "./Pages/Homepage";
function App() {
  return (
    <>
      <Router basename="/#">
        <Header />
      </Router>
    </>
  );
}

export default App;
