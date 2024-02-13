import React, { Component, createRef } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
// import { TODOS } from "../../const";

export class InputTodo extends Component {
  inputRef = createRef();

  render() {
    const { todo } = this.props;
    const submit = (e) => {
      e.preventDefault();
      this.props.getTodo(this.inputRef.current.value);
      this.inputRef.current.value = "";
    };
    this.inputRef.current && (this.inputRef.current.value = todo);
    return (
      <Form onSubmit={submit}>
        <InputGroup className="my-3 w-50 m-auto">
          <Form.Control
            ref={this.inputRef}
            placeholder="Add Task or Todo"
            aria-label="Recipient's username"
          />
          <Button type="submit" variant="outline-success">
            {todo ? "Save" : "Add"}
          </Button>
        </InputGroup>
      </Form>
    );
  }
}

export default InputTodo;
