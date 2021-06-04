import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Subscriptions from "./components/Subscriptions";
import Shop from "./components/Shop";
import Faq from "./components/Faq";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Subscriptions" component={Subscriptions} />
          <Route exact path="/Shop" component={Shop} />
          <Route exact path="/Faq" component={Faq} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
