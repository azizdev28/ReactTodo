import React, { Component } from "react";
import { Container } from "react-bootstrap";

export const HocComponent = (Comp) => {
  return class extends Component {
    render() {
      return (
        <Container>
          <Comp />
        </Container>
      );
    }
  };
};

export default HocComponent;
