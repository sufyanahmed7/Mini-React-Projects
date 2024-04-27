import Data from "./Data";
import Intro from "./Intro";
import Skills from "./Skills";
import "./App.css";
const allSkills = [
  { skill: "Html", level: "Intermediate", color: "pink" },
  { skill: "CSS", level: "Advanced", color: "red" },
  { skill: "Java", level: "Intermediate", color: "orange" },
  { skill: "React", level: "Advanced", color: "green" },
  { skill: "Git", level: "Beginner", color: "blue" },
];

function App() {
  return (
    <div className="container">
      <Data />
      <Intro />
      {allSkills.map((skiller) => (
        <Skills skillObj={skiller} key={skiller.skill} />
      ))}
    </div>
  );
}

export default App;
