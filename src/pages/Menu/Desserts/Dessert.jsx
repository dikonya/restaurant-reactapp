// Desserts.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { dessertsData } from "../../../utils/Data/DessertsData";
import "./Desserts.css";

class Desserts extends Component {
  render() {
    return (
      <div className="desserts-section py-5 bg-dark text-light">
        <Container>
          <h2 className="text-center fs-0.5 mb-4 mb-lg-5 text-uppercase fw-bold">
            Desserts
          </h2>
          <Row className="gx-4">
            {dessertsData.map((item) => (
              <Col key={item.id} lg={6} className="mb-4">
                <div className="custom-card border-0 shadow h-100 d-flex  bg-white ">
                  <div className="card-img-container">
                    <img
                      src={item.image}
                      className="card-img"
                      alt={item.name}
                    />
                  </div>
                  <div className="card-text-container d-flex flex-column justify-content-between">
                    <div>
                      <h3 className="text-center fs-3 text-dark">
                        {item.name}
                      </h3>
                      <p className="text-center fs-5 text-dark">
                        {item.description}
                      </p>
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
        <ul className="navigation-links-desserts">
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
            <Link to="/drinks" className="text-decoration-none">
              Drinks
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Desserts;
