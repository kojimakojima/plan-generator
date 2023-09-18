import Menu from "./Menu";
import TopBar from "./TopBar";
import Output from "./Output";
import PlanList from "./PlanList";
import { useState } from "react";
import TextFileGenerator from "./TextFileGenerator";

function App() {
  const [type, setType] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="app">
      <TopBar />
      <Output type={type} setList={setList} />
      <Menu type={type} setType={setType} />

      {list.length == 0 ? (
        <></>
      ) : (
        <>
          <PlanList list={list} setList={setList} />
          <TextFileGenerator list={list} />
        </>
      )}
    </div>
  );
}

export default App;
