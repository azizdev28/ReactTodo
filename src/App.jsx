import { Component, Fragment, createRef, useState } from "react";

import "./App.css";
import { ToastContainer } from "react-toastify";
// import Toastify from "./components/Toastify";
// import Bootstrap from "./components/Bootstrap";
// import InputTextRef from "./components/InputTextRef";
// import FormCustom from "./components/FormCustom";
import { render } from "react-dom";
import Todo from "./components/Todo";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer />
        {/* <Toastify /> */}
        {/* <Bootstrap /> */}
        {/* <InputTextRef /> */}
        {/* <FormCustom /> */}
        <Todo />
      </Fragment>
    );
  }
}

export default App;
