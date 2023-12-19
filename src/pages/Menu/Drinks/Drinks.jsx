// Drinks.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { drinksData } from "../../../utils/Data/DrinksData";
import "./Drinks.css";

class Drinks extends Component {
  render() {
    return (
      <div className="drinks-section py-5 bg-white">
        <Container>
          <h2 className="text-center fs-0.5 mb-4 mb-lg-5 text-uppercase fw-bold ">
            Drinks
          </h2>
          <Row className="gx-4">
            {drinksData.map((item) => (
              <Col key={item.id} lg={6} className="mb-4">
                <div className="custom-card border-0 shadow h-100 d-flex">
                  <div className="card-img-container">
                    <img
                      src={item.image}
                      className="card-img"
                      alt={item.name}
                    />
                  </div>
                  <div className="card-text-container d-flex flex-column justify-content-between">
                    <div>
                      <h3 className="text-center fs-3 text-capitalize">
                        {item.name}
                      </h3>
                    </div>
                    <div className="text-center fs-3 fw-bold text-success">
                      {item.price}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <ul className="navigation-links-drinks">
          <li>
            <Link to="/menu" className="text-decoration-none ">
              Back to Menu
            </Link>
          </li>
          <li>
            <Link to="/breakfast" className="text-decoration-none">
              Breakfast
            </Link>
          </li>
          <li>
            <Link to="/dishes" className="text-decoration-none">
              Dishes
            </Link>
          </li>
          <li>
            <Link to="/desserts" className="text-decoration-none">
              Desserts
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Drinks;
