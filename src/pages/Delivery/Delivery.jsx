import React, { Component } from 'react';
import './Delivery.css'; 
import { Container, Form, Button, Modal } from 'react-bootstrap';

class Delivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryAddress: '',
      deliveryTime: '',
      deliveryInstructions: '',
      showModal: false, 
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const deliveryMessage =
      currentTime >= '17:30' && currentTime <= '19:30'
        ? 'Please expect delivery within two hours.'
        : 'Please expect delivery within 50 minutes.';
    this.setState({ showModal: true, deliveryMessage });
    console.log('Delivery details submitted:', this.state);
  };

  handleClose = () => {
    this.setState({ showModal: false });
    this.setState({
      deliveryAddress: '',
      deliveryTime: '',
      deliveryInstructions: '',
    });
  };
  render() {
    return (
      <div className='delivery-page'>
      <header className='height-50 mt-5'>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className='text-light'>Delivery</h1>
        </div>
      </header>
        <Container>
          <Form onSubmit={this.handleSubmit} className="delivery-form">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="deliveryAddress">Your Address</Form.Label>
              <Form.Control
                type="text"
                id="deliveryAddress"
                name="deliveryAddress"
                value={this.state.deliveryAddress}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="deliveryTime">Delivery Time</Form.Label>
              <Form.Control
                type="text"
                id="deliveryTime"
                name="deliveryTime"
                value={this.state.deliveryTime}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="deliveryInstructions">The foods</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="deliveryInstructions"
                name="deliveryInstructions"
                value={this.state.deliveryInstructions}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button type="submit" className="btn btn-success btn-lg text-capitalize mx-2">
              Send
            </Button>
          </Form>
        </Container>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delivery Submitted</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.deliveryMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Delivery;
