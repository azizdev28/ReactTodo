import React, { forwardRef } from "react";

const InputText = forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={props.handleRef}>Get Value</button>
    </div>
  );
});

export default InputText;
