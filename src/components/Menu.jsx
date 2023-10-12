import { useContext } from "react";
import { usePlan } from "../contexts/PlanContext";

function Menu() {
  const { type, setType } = usePlan();
  return (
    <div className="menu">
      <div>
        <label>Type: </label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Random</option>
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">Busywork</option>
        </select>
      </div>
    </div>
  );
}

export default Menu;
