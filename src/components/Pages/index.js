import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export class HomePage extends React.Component {
  render() {
    return <div className="HomePage">HomePage</div>;
  }
}

export class ContactsPage extends React.Component {
  render() {
    return <div className="ContactsPage">ContactsPage</div>;
  }
}

export class AboutPage extends React.Component {
  render() {
    return <div className="AboutPage">AboutPage</div>;
  }
}

export class ProductsPage extends React.Component {
  render() {
    return (
      <div className="ProductsPage">
        <p>ProductsPage</p>
        <Link to="/products/13259/product_details">Product id - 13259</Link>
      </div>
    );
  }
}

export class ProductDetailsPage extends React.Component {
  render() {
    return <div className="ProductDetailsPage">ProductDetailsPage. Product ID - {this.props.match.params.id}</div>;
  }
}
