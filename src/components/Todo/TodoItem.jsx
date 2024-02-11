import React, { Component } from "react";

export class TodoDoneItem extends Component {
  render() {
    const { id, title, doneTodo } = this.props;
    return (
      <div className="p-3 d-flex  justify-content-between align-items-center border">
        <span>{title}</span>

        <button className="btn btn-success" onClick={() => doneTodo(id)}>
          Done
        </button>
      </div>
    );
  }
}

export default TodoDoneItem;
