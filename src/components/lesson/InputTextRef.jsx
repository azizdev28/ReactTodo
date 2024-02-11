import React, { Component, createRef } from "react";

export class inputTextRef extends Component {
  constructor(props) {
    super(props);

    this.inputRef = createRef();
  }
  render() {
    const getValue = () => {
      console.log(this.inputRef.current.value);
    };
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={getValue}> Get Value</button>
      </div>
    );
  }
}

export default inputTextRef;
