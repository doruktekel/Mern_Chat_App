import React from "react";

const GenderCheckbox = () => {
  return (
    <div className=" flex ">
      <div className="form-control flex">
        <label className="label cursor-pointer flex gap-2">
          <span className="label-text text-gray-100">Male</span>
          <input type="checkbox" defaultChecked className="checkbox" />
        </label>
      </div>
      <div className="form-control flex">
        <label className="label cursor-pointer flex gap-2">
          <span className="label-text text-gray-100">Female</span>
          <input type="checkbox" defaultChecked className="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
