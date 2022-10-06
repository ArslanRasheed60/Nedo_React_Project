import React from "react";
const RenderFormGroup = (props) => {
  const { name, label, v1 = "All", v2 = "New", v3 = "Trending" } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name}>
        <option value="1">{v1}</option>
        <option value="2">{v2}</option>
        <option value="3">{v3}</option>
      </select>
    </div>
  );
};

export default RenderFormGroup;
