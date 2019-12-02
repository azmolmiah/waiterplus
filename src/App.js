import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import HomePage from "./components/pages/HomePage";
import BookingsPage from "./components/pages/BookingsPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import AccountPage from "./components/pages/AccountPage";
import MenuPage from "./components/pages/MenuPage";
import TermsPage from "./components/pages/TermsPage";
import PrivacyPage from "./components/pages/PrivacyPage";
import CookiePage from "./components/pages/CookiePage";

import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/bookings" component={BookingsPage} />
            <Route exact path="/menu" component={MenuPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/termsofuse" component={TermsPage} />
            <Route exact path="/privacy" component={PrivacyPage} />
            <Route exact path="/cookies" component={CookiePage} />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
};

export default App;
