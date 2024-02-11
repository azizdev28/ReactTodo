import React from "react";
import { toast } from "react-toastify";

const Toastify = () => {
  const notify = () => {
    // toast("Hello world");
    toast.success("Hello world");
  };
  return (
    <div>
      <button onClick={notify}>Work</button>
    </div>
  );
};

export default Toastify;
