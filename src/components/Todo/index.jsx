import React, { Component } from "react";
import { Col, Container, Row, Toast } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";
import InputTodo from "./InputTodo";
import TodoDoneItem from "./TodoDoneItem";
import TodoItem from "./TodoItem";
import { toast } from "react-toastify";
import { TODOS } from "../../const";

export class Todo extends Component {
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
        title: "Feading cats",
        done: true,
      },
    ],
  };
  render() {
    const unDoneItem = this.state.todos.filter((todo) => !todo.done);
    const doneItem = this.state.todos.filter((todo) => todo.done);
    const getTodo = (value) => {
      let todos = [
        ...this.state.todos,
        { id: uuid4(), title: value, done: false },
      ];
      if (value !== "") {
        this.setState({ todos });
        toast.success("Qo'shildi ");
        localStorage.setItem(TODOS, JSON.stringify(todos));
      } else {
        toast.error("Inputni to'ldiring !!!");
      }
    };
    const doneTodo = (id) => {
      console.log(id);
      let todos = this.state.todos.map((todo) => {
        todo.id === id && (todo.done = true);
        return todo;
      });
      this.setState({ todos });
      localStorage.setItem(TODOS, JSON.stringify(todos));
    };
    const deleteTodo = (id) => {
      let todos = this.state.todos.filter((todo) => todo.id !== id);
      this.setState({ todos });
      localStorage.setItem(TODOS, JSON.stringify(todos));
    };
    return (
      <div>
        <Container>
          <InputTodo getTodo={getTodo} />
          <Row>
            <Col lg={6}>
              {unDoneItem.map((todo) => (
                <TodoItem {...todo} key={todo.id} doneTodo={doneTodo} />
              ))}
            </Col>
            <Col lg={6}>
              {doneItem.map((todo) => (
                <TodoDoneItem {...todo} key={todo.id} deleteTodo={deleteTodo} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Todo;
