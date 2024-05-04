function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.id} {item.description} {item.packed}
      </span>

      <button>❌</button>
    </li>
  );
}

export default Item;
