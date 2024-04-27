function Pizza({ pizzaObj }) {
  // const { name, ingredients, photoName, price } = props;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : " "}`}>
      <img src={pizzaObj.photoName} alt="spinachi"></img>
      <div>
        <h1>{pizzaObj.name}</h1>
        <p>{pizzaObj.ingredients}</p>
      </div>

      <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
    </li>
  );
}

export default Pizza;
