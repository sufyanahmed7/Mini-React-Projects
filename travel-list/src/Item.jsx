function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description} {item.packed}
      </span>
      <button>❌</button>
      <button>❌</button>

    </li>
  );
}

export default Item;
