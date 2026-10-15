import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
export default function Education({ education = [] }) {
  return (
    <section id="education" className="section container">
      <SectionHeading eyebrow="EDUCATION" title="Academic Background" />
      {education.length ? (
        <div className="education-grid">
          {education.map((item, i) => (
            <article className="glass-card education-card" key={i}>
              <GraduationCap aria-hidden="true" />
              <div>
                <h3>{item.degree}</h3>
                <p>{item.college}</p>
                <span>{item.period}</span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="section-body">
          Education details will appear here once saved in PostgreSQL.
        </p>
      )}
    </section>
  );
}
