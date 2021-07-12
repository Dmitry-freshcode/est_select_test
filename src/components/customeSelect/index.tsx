import React, { useState } from "react";
import "./index.scss";
import ArrowDownLogo from "../images/arrowDown";
import CheckIcon from "../images/checkIcon";

export interface PropsData {
  placeholder: string;
  items: string[];
}

interface Props {
  data: PropsData;
}

export const CustomSelect: React.FC<Props> = (props) => {
  const [arrow, setArrow] = useState("");
  const [list, setList] = useState(" hide");
  const [selected, setSelected] = useState<string[]>([]);
  const [allSelected, setAllSelected] = useState(false);
  const { data } = props;
  const openHandler = () => {
    if (data.items.length > 0) {
      if (arrow.length === 0) {
        setArrow(" rotate");
        setList("");
      } else {
        setArrow("");
        setList(" hide");
      }
    }
  };
  const setItemHandler = (item: string) => {
    if (!selected.includes(item)) {
      setSelected([...selected, item]);
    } else {
      setSelected(selected.filter((el) => el !== item));
      setAllSelected(false);
    }
  };
  const clearHandler = () => {
    setSelected([]);
    setAllSelected(false);
  };
  const selectAll = () => {
    if (!allSelected) {
      setAllSelected(true);
      setSelected(data.items);
    } else {
      setAllSelected(false);
      setSelected([]);
    }
  };
  return (
    <>
      <div className="customSelect-container">
        <div className="inputContainer">
          <input placeholder={data.placeholder} />
          <ArrowDownLogo
            onClick={openHandler}
            className={`arrowDown${arrow}`}
          />
          <div className={`list${list}`}>
            <div className="listItems">
              <div aria-hidden="true" className="listItem" onClick={selectAll}>
                <CheckIcon checked={allSelected} />
                <span>All {data.placeholder}</span>
              </div>
              {data.items.map((item) => (
                <div
                  aria-hidden="true"
                  className="listItem"
                  key={item}
                  onClick={() => setItemHandler(item)}
                >
                  <CheckIcon checked={selected.includes(item)} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="listFooter">
              <p
                aria-hidden="true"
                className="listFooter-clear"
                onClick={clearHandler}
              >
                Clear
              </p>
              <div className="listFooter-apply">Apply</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
