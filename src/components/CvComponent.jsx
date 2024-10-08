import "./styles/resumeCV.css";
import {useState} from 'react';
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
  onRender
}) => {
  const [arrayBox , setArrayBox] = useState([{school:"Harvard",title:"Enginer",date:"12/05/22"}])
  function addSection() {
    setArrayBox([...arrayBox,{school:school, title:title, date:date}])
    onRender()
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
            <p>A brief description of Alan's profile.</p>
          </div>
          <div className="clear"></div>
        </section>

        {arrayBox.map((box,id) => (
          <EduInfo key={id} school={box.school} title={box.title} date={box.date}/>
        ))}
        {/* <EduInfo school={school} title={title} date={date} /> */}
        <button className="addSectionEdu" onClick={addSection} >Add +</button>

        <ExperienceInfo
          company={company}
          position={position}
          responsabilities={responsabilities}
          yearsWorking={yearsWorking}
        />

        <section>
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
