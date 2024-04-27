function Order({ openHours, closeHours }) {
  return (
    <div className="order">
      <p>
        We are open from {openHours}:00 to {closeHours}:00. Please come visit us
        or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
