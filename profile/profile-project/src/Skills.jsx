function Skills({ skillObj }) {
  return (
    <div
      style={{
        backgroundColor: skillObj.color,
        padding: "3px",
      }}
    >
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "Beginner" && "👶"}
        {skillObj.level === "Intermediate" && "😶"}
        {skillObj.level === "Advanced" && "👏"}
      </span>
    </div>
  );
}

export default Skills;
