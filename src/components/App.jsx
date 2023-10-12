import Menu from "./Menu";
import TopBar from "./TopBar";
import Output from "./Output";
import PlanList from "./PlanList";

import TextFileGenerator from "./TextFileGenerator";
import { usePlan } from "../contexts/PlanContext";

function App() {
  const { list } = usePlan();

  return (
    <div className="app">
      <TopBar />
      <Output />
      <Menu />

      {list.length > 0 && (
        <>
          <PlanList />
          <TextFileGenerator />
        </>
      )}
    </div>
  );
}

export default App;
