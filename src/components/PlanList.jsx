import Plan from "./Plan";

function PlanList({ list, setList }) {
  return (
    <div className="plan-list">
      <h2>List</h2>
      <ul className="list">
        {list.map((item) => (
          <Plan key={item.id} setList={setList} id={item.id}>
            {item.activity}
          </Plan>
        ))}
      </ul>
    </div>
  );
}

export default PlanList;
