import React, { Component } from 'react';
import Filter from './Filter';
import Task from './Task';
class Home extends Component {
  render() {
    return (
      <section className="Home-section">
        <h1 className="heading-title"> Tasks </h1>

        <Filter />

        <div className="_spacer-md" />

        <Task />
      </section>
    );
  }
}

export default Home;
