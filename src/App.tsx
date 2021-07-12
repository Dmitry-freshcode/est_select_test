import React from "react";
import "./App.scss";
import { CustomSelect, PropsData } from "./components/customeSelect";

const data: PropsData = {
  placeholder: "Opponents",
  items: [
    "Los Angeles1 Lakers",
    "Los Angeles2 Lakers",
    "Los Angeles3 Lakers",
    "Los Angeles4 Lakers",
  ],
};

const App: React.FunctionComponent = () => (
  <div className="App">
    <CustomSelect data={data} />
  </div>
);

export default App;
