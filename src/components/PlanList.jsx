import { usePlan } from "../contexts/PlanContext";
import Plan from "./Plan";

function PlanList() {
  const { list } = usePlan();
  return (
    <div className="plan-list">
      <h2>List</h2>
      <ul className="list">
        {list.map((item) => (
          <Plan key={item.id} id={item.id}>
            {item.activity}
          </Plan>
        ))}
      </ul>
    </div>
  );
}

export default PlanList;
