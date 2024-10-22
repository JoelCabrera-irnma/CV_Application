import "./styles/experienceInfo.css";

function ExperienceInfo({
  company,
  position,
  responsabilities,
  yearsWorking,
  bool,
}) {
  return (
    <>
      <section style={{ borderTop: !bool ? "1px solid #dedede" : "none" }}>
        {!bool && (
          <div className="sectionTitle">
            <h1>Work Experience</h1>
          </div>
        )}

        <div className="sectionContent">
          <h2>
            {position} at {company}
          </h2>
          <p className="subDetails">April 2011 - Present {yearsWorking}</p>
          <p> {responsabilities} </p>
        </div>
        <div className="clear"></div>
      </section>
    </>
  );
}

export default ExperienceInfo;
