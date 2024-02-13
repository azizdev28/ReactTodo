import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";
import InputTodo from "./InputTodo";
import TodoDoneItem from "./TodoDoneItem";
import TodoItem from "./TodoItem";
import { toast } from "react-toastify";
import { TODOS } from "../../const";

class Todo extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem(TODOS)) || [
      {
        id: 0,
        title: "Playing football",
        done: false,
      },
      {
        id: 1,
        title: "Reading books",
        done: false,
      },
      {
        id: 2,
        title: "Feeding cats",
        done: true,
      },
    ],
    selected: null,
  };

  getTodo = (value) => {
    if (!value) {
      toast.error("Inputni to'ldiring !!!");
      return;
    }

    let todos;
    if (this.state.selected !== null) {
      todos = this.state.todos.map((td) =>
        td.id === this.state.selected ? { ...td, title: value } : td
      );
      this.setState({ todos, selected: null });
      toast.success("Input o'zgartirildi !!!");
    } else {
      todos = [...this.state.todos, { id: uuid4(), title: value, done: false }];
      this.setState({ todos });
      toast.success("Qo'shildi !!!");
    }

    localStorage.setItem(TODOS, JSON.stringify(todos));
  };

  doneTodo = (id) => {
    const todos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, done: true } : todo
    );
    this.setState({ todos });
    localStorage.setItem(TODOS, JSON.stringify(todos));
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
    localStorage.setItem(TODOS, JSON.stringify(todos));
  };

  editTodo = (id) => {
    this.setState({ selected: id });
  };

  render() {
    const unDoneItem = this.state.todos.filter((todo) => !todo.done);
    const doneItem = this.state.todos.filter((todo) => todo.done);

    return (
      <Container className="my-4">
        <h1>Todo List</h1>
        <InputTodo
          todo={
            this.state.selected !== null
              ? this.state.todos.find((td) => td.id === this.state.selected)
                  .title
              : ""
          }
          getTodo={this.getTodo}
        />
        <Row>
          <Col lg={6}>
            {unDoneItem.map((todo) => (
              <TodoItem
                editTodo={this.editTodo}
                doneTodo={this.doneTodo}
                deleteTodo={this.deleteTodo}
                key={todo.id}
                {...todo}
              />
            ))}
          </Col>
          <Col lg={6}>
            {doneItem.map((todo) => (
              <TodoDoneItem
                {...todo}
                key={todo.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Todo;
