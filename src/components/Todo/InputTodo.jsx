import React, { Component, createRef } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

export class InputTodo extends Component {
  inputRef = createRef();
  render() {
    const submit = (e) => {
      e.preventDefault();
      this.props.getTodo(this.inputRef.current.value);
      this.inputRef.current.value = "";
    };
    return (
      <Form onSubmit={submit}>
        <InputGroup className="my-3 w-50 m-auto">
          <Form.Control
            ref={this.inputRef}
            placeholder="Add Task or Todo"
            aria-label="Recipient's username"
          />
          <Button type="submit" variant="outline-success">
            Save
          </Button>
        </InputGroup>
      </Form>
    );
  }
}

export default InputTodo;
