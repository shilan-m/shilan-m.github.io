import './About.css';
const EducationsData = [
    {id: 1, uni: "UNSW", degree: "Bachelor of Information System"},
    {id: 2, uni: "USYD", degree: "Master of Information Technology, Major in Software Engineering"}
]
const educationList = EducationsData.map((education) => 
    <li key={education.id.toString()}>{education.uni} : {education.degree}</li>
);

const SESkillData = [
    {id: 1, name: "Java", level: 3},
    {id: 2, name: "Python", level: 3},
    {id: 3, name: "Web", level: 4}
]
const SESkillList = SESkillData.map((skill) => 
    <li key={skill.id.toString()}>{skill.name}  -  {skill.level}</li>
);
function About() {
  return (
    <div className="About">
      <header className="About-header">
          Shilan Ma (Software Engineer)
      </header>
      <div className="About-info">
        Education:
        <ul>{educationList}</ul>
        <br></br>
        Skill List:
        <ul>{SESkillList}</ul>
      </div>
    </div>
  );
}

export default About;