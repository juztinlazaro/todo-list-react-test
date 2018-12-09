import React, { Component } from 'react';
import TaskItem from './TaskItem';

class Task extends Component {
  state = {
    expanded: null,
  };

  handleChange = (event, expanded, panel) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    return (
      <section className="task-container">
        <h2 className="day-title">
          Today <span className="item-count-badge">13</span>
        </h2>

        <div className="task-items">
          <TaskItem
            onExpand={this.handleChange}
            expanded={this.state.expanded}
          />
        </div>
      </section>
    );
  }
}

export default Task;
