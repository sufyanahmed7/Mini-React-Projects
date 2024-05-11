import { useState } from "react";
import PackingList from "./PackingList";

function Form() {
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  <PackingList description={description} />;

  return (
    <form className="add-form" onClick={handleSubmit}>
      <h3>What do you need for 😍 long trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
