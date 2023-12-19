import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDate: ''
    };
  }

  componentDidMount() {
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    this.setState({ newDate: todayYear });
  }

  render() {
    return (
      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>WE COOK WITH LOVE &copy; Dikonya_&hearts; {this.state.newDate}</p>
      </footer>
    );
  }
}

export default Footer;
