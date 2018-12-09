import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PrivateData extends Component {
  render() {
    return (
      <div>
        <h2>PrivateData</h2>
        <Link to="/"> Home </Link>
        <Link to="/private-data"> PrivateData </Link>
        <Link to="/test"> Test </Link>
      </div>
    );
  }
}

export default PrivateData;
