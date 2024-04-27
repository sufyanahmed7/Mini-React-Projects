const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
import { useState } from "react";
function App() {
  {
    /** we can only use react hooks on top of the component not in the functions or if else statments 
  or anything else,only at the top of the component */
  }
  {
    /** States are immutable so dont mutate them by changing the state variable directly */
  }
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handleNext = () => {
    if (step < 3) setStep((currStep) => currStep + 1);
  };
  const handlePrev = () => {
    if (step > 1) setStep((currStep) => currStep - 1);
  };
  const handleClose = () => {
    setIsOpen((isToggle) => !isToggle);
  };
  console.log(step);
  return (
    <>
      <button onClick={handleClose} className="close">
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">{messages[step - 1]}</p>
          <div className="buttons">
            <button
              onClick={handlePrev}
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
