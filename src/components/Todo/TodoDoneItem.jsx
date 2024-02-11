import React, { Component } from "react";

export class TodoDoneItem extends Component {
  render() {
    const { id, title, deleteTodo } = this.props;
    return (
      <div className="p-3 d-flex  justify-content-between align-items-center border">
        <span>{title}</span>

        <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default TodoDoneItem;
