import React from "react";
import "./checkedIcon.scss";
import { ReactComponent as Logo } from "./check.svg";

interface Props {
  checked: boolean;
}

const CheckIcon: React.FC<Props> = (props) => {
  const { checked } = props;
  return (
    <div className="checkIcon">
      {!checked ? (
        <div className="notChecked" />
      ) : (
        <div className="checked">
          <Logo />
          {/* <img src={check} alt="arrow" /> */}
        </div>
      )}
    </div>
  );
};

export default CheckIcon;
