import SectionHeading from "./SectionHeading";
export default function Experience({ experience = [] }) {
  return (
    <section id="experience" className="section container">
      <SectionHeading
        eyebrow="WORK EXPERIENCE"
        title="My Professional Journey"
      />
      {experience.length ? (
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={`${item.company}-${index}`}>
              <div className="timeline-top">
                <div>
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                </div>
                <span className="period">{item.period}</span>
              </div>
              {item.points.length > 0 && (
                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point.replace(/^[-•]\s*/, "")}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="section-body">
          Experience details will appear here once saved in PostgreSQL.
        </p>
      )}
    </section>
  );
}
