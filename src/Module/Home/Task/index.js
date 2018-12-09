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
    const { tasks } = this.props;
    return (
      <section className="task-container">
        <h2 className="day-title">
          Today <span className="item-count-badge">{tasks.length}</span>
        </h2>

        <div className="task-items">
          {tasks.map(task => {
            return (
              <TaskItem
                task={task}
                onExpand={this.handleChange}
                expanded={this.state.expanded}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Task;
