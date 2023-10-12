import { createContext, useContext, useState } from "react";

const PlanContext = createContext();

function PlanProvider({ children }) {
  const [type, setType] = useState("");
  const [list, setList] = useState([]);
  return (
    <PlanContext.Provider value={{ type, setType, list, setList }}>
      {children}
    </PlanContext.Provider>
  );
}

function usePlan() {
  const c = useContext(PlanContext);
  return c;
}

export { PlanProvider, usePlan };
