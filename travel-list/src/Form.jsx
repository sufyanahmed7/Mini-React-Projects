function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }
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
      <input type="text" placeholder="item.." />
      <button onClick={handleClick}>Add</button>
    </form>
  );
}

export default Form;
