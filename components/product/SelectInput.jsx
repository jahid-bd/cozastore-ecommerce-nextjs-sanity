import React, { useState } from "react";
// import { useDetectClickOutside } from "react-detect-click-outside";
import { TiArrowUnsorted } from "react-icons/ti";

const SelectInput = ({ label, options }) => {
  const [dropTrig, setDropTrig] = useState(false);
  const [optionValue, setOptionValue] = useState({
    text: "Chose an Option",
    value: "",
  });

  const handleDrop = () => {
    if (dropTrig) {
      setDropTrig(false);
    } else {
      setDropTrig(true);
    }
  };

  // const ref = useDetectClickOutside({ onTriggered: handleDrop });

  const onChangeHandler = (option) => {
    setOptionValue({ ...option });
    setDropTrig(false);
  };

  return (
    <div className="select-input">
      <div className="label">
        <span>{label}</span>
      </div>
      <div className="select-box" onClick={handleDrop}>
        <div className="text">
          <span>{optionValue.text}</span>
        </div>
        <div className="icon">
          <i>
            <TiArrowUnsorted />
          </i>
        </div>
        {dropTrig && (
          <div className="select-dropdown">
            <ul>
              <li
                onClick={() =>
                  onChangeHandler({
                    text: "Choose an Option",
                    value: "",
                  })
                }
                className={optionValue.value === "" && "active-opt"}
              >
                Choose an Option
              </li>
              {options.map((opt) => (
                <li
                  key={opt.value}
                  onClick={() => onChangeHandler(opt)}
                  className={opt.value === optionValue.value && "active-opt"}
                >
                  {opt.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
