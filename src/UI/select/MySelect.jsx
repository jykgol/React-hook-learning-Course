import i from "./MySelect.module.css"
import React from "react";

const MySelect = ({ value, setValue, options, defaultValue}) => {
    return (
        <select value={value} onChange={(a)=> setValue(a.target.value)} className={i.mySelect}>
            <option disabled value="">{defaultValue}</option>
            {options.map(el => <option key={el.value} value={el.value}>{el.name}</option>)}
        </select>
    );
};

export default MySelect