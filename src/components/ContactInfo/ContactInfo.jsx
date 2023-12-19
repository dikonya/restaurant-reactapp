import React, { Component } from 'react';

class ContactInfo extends Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center'>
        <h2 className='fs-1 mb-3 text-uppercase fw-bold'>Where to find us</h2>
        <p className='mb-5'>microdistrict Orken 2-39, Atyrau city</p>
        <h3 className='text-capitalize'>Opening hours</h3>
        <p className="m-0">Mon - Fri: 09:00 - 17:00</p>
        <p>Sat - Sun: 10:00 - 21:00</p>
      </div>
    );
  }
}

export default ContactInfo;
