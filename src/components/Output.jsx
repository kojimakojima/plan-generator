import { useState } from "react";

function Output({ type, setList }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSaveButton, setIsSaveButton] = useState(false);
  const [isSave, setIsSave] = useState(false);

  const fetchData = async () => {
    const url = `http://www.boredapi.com/api/activity?type=${type}`;

    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      console.log(data);
      setLoading(false);
      !isSave && setIsSave(true);
      setIsSaveButton(false);
    } catch (e) {
      setLoading(true);
      console.log(e);
      setLoading(false);
    }
  };

  const handleSave = () => {
    const newPlan = { activity: data.activity, id: Date.now() };
    setList((list) => [...list, newPlan]);
    setIsSaveButton(true);
  };

  return (
    <div className="output">
      {loading ? (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      ) : (
        <div className="output-main">
          <p className="data-activity">{data.activity}</p>
          {isSave && (
            <button
              className="save-btn"
              onClick={handleSave}
              disabled={isSaveButton}
            >
              Save
            </button>
          )}
        </div>
      )}
      <button className="generate-btn" onClick={fetchData}>
        Generate a Plan
      </button>
    </div>
  );
}

export default Output;
