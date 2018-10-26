import React, { Component } from 'react';

class Heading extends Component {
  render() {
    const { myname } = this.props

    return (
      <h1>Hello, {myname}</h1>
    );
  }
}

export default Heading;