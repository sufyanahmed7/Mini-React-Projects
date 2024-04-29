function Item({ item }) {
  return (
    <div>
      <li>{item.did}</li>
      <li>{item.description}</li>
    </div>
  );
}

export default Item;
