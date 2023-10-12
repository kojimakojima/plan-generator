import { usePlan } from "../contexts/PlanContext";

function Plan({ children, id }) {
  const { setList } = usePlan();

  const handleDeletePlan = (id) => {
    setList((list) => list.filter((e) => e.id !== id));
  };
  return (
    <div className="plan">
      <li>{children}</li>
      <button
        className="delete-btn"
        onClick={() => handleDeletePlan(id)}
      ></button>
    </div>
  );
}

export default Plan;
