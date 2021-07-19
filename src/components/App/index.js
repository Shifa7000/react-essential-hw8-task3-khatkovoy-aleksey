import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { HomePage, ContactsPage, AboutPage, ProductsPage, ProductDetailsPage } from "../Pages";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <menu>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </menu>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contacts" component={ContactsPage} />
            <Route path="/about" component={AboutPage} />
            <Route exact path="/products" component={ProductsPage} />
            <Route exact path="/products/:id/product_details" component={ProductDetailsPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
