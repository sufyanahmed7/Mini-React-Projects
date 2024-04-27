import Order from "./Order";
function Footer() {
  // return React.createElement("footer", null, "We are closed");
  const getHours = new Date().getHours();
  const openHours = 8;
  const closeHours = 22;
  const isOpen = getHours >= openHours && getHours <= closeHours;
  return (
    <footer className="footer">
      {/*And Short circuiting*/}
      {isOpen ? (
        <Order openHours={openHours} closeHours={closeHours} />
      ) : (
        <p>
          We are closed. Please come later between {openHours}:00 and{" "}
          {closeHours}:00
        </p>
      )}
    </footer>
  );
}

export default Footer;
