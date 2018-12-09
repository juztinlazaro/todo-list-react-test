import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBlogEpic } from '@app/store/blog/blog.action';

class Test extends Component {
  onGetBlog = () => {
    this.props.getBlogEpic();
  };

  render() {
    return (
      <div>
        <h2>Test</h2>
        <button onClick={this.onGetBlog}>Get blog</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getBlogEpic },
)(Test);
