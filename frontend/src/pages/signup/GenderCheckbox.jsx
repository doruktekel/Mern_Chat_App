import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-5">
      <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            checked={selectedGender === "male"}
            className="checkbox"
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
