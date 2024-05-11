import Item from "./Item";
import Form from "./Form";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Spoon", quantity: 12, packed: true },
  { id: 2, description: "Spoon", quantity: 12, packed: true },
];
function PackingList(props) {
  const [description] = props;
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={description} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
export default PackingList;
