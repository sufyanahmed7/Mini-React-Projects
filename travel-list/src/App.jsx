import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
function App() {
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
