import React, { Component, createRef } from "react";
import InputText from "./InputText";
import HocComponent from "./HocComponent";

export class FormCustom extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
  }
  render() {
    const handleRef = () => {
      console.log(this.ref.current.value);
    };
    const submit = (e) => {
      e.preventDefault();
    };
    return (
      <form onClick={submit}>
        <InputText ref={this.ref} handleRef={handleRef} />
      </form>
    );
  }
}
let HocFormCustom = HocComponent(FormCustom);

export default HocFormCustom;
