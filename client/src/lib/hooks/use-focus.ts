import React from "react";

const useFocus = () => {
  const htmlElRef = <any>React.useRef(null);
  const setFocus = () => {
    console.log("focus");
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

export default useFocus;
