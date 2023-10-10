import i from "./MyInput.module.css"
import React from "react";

const MyInput =  React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={i.MyInput} {...props} />
    );
});

export default MyInput