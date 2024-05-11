import Item from "./Item";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
];
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item.description} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
export default PackingList;
