import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import Task from './Task';
class Home extends Component {
  render() {
    console.log(this.props.tasks);
    return (
      <section className="Home-section">
        <h1 className="heading-title"> Tasks </h1>

        <Filter />

        <div className="_spacer-md" />

        <Task tasks={this.props.tasks} />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Home);
