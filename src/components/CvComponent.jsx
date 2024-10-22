import "./styles/resumeCV.css";
import { useState } from "react";
import GralInfo from "./GralInfo";
import EduInfo from "./EduInfo";
import ExperienceInfo from "./ExperienceInfo";

const CvComponent = ({
  name,
  phone,
  email,
  school,
  title,
  date,
  company,
  position,
  responsabilities,
  yearsWorking,
  onRender,
}) => {
  const [arrayBox, setArrayBox] = useState([]);
  const [arrayBoxExperience, setArrayBoxExperience] = useState([]);
  const [boolean, setBoolean] = useState(false)

  function addSection(value) {
    if (value[0] === 2) {
      setArrayBox([...arrayBox, { school: school, title: title, date: date }]);
    } else if (value[0] === 3) {
      setArrayBoxExperience([
        ...arrayBoxExperience,
        {
          company: company,
          position: position,
          responsabilities: responsabilities,
          yearsWorking: yearsWorking,
        },
      ]);
    }
    onRender(value);
    setBoolean(true)
  }
  return (
    <div id="cv" className="instaFade">
      <GralInfo name={name} phone={phone} email={email} title={title} />

      <div id="mainArea" className="quickFade delayFive">
        <section>
          <div className="sectionTitle">
            <h1>Profile</h1>
          </div>
          <div className="sectionContent">
            <p>A brief description of {name}'s profile.</p>
          </div>
          <div className="clear"></div>
        </section>
        <EduInfo school={school} title={title} date={date} />
        {arrayBox.map((box, id) => (
          <EduInfo
            key={id}
            school={box.school}
            title={box.title}
            date={box.date}
            bool={boolean}
          />
        ))}
        <button
          className="addSectionEdu"
          onClick={() => {
            addSection([2]);
          }}
        >
          Add +
        </button>

        <ExperienceInfo
          company={company}
          position={position}
          responsabilities={responsabilities}
          yearsWorking={yearsWorking}
        />
        {arrayBoxExperience.map((box, id) => (
          <ExperienceInfo
            key={id}
            company={box.company}
            position={box.position}
            responsabilities={box.responsabilities}
            yearsWorking={box.yearsWorking}
            bool={boolean}
          />
        ))}
        <button
          className="addSectionExp"
          onClick={() => {
            addSection([3]);
          }}
        >
          Add +
        </button>

        <section style={{borderTop:"1px solid #dedede"}}>
          <div className="sectionTitle">
            <h1>Skills</h1>
          </div>
          <div className="sectionContent">
            <ul className="keySkills">
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
              <li>Skill 4</li>
            </ul>
          </div>
          <div className="clear"></div>
        </section>
      </div>
    </div>
  );
};

export default CvComponent;
