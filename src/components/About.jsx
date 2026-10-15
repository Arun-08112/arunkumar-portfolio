import {
  Code2,
  Lightbulb,
  Users,
  TrendingUp,
  Briefcase,
  Layers3,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
const highlights = [
  { icon: Code2, title: "Clean Code", text: "Reusable & scalable" },
  { icon: Lightbulb, title: "Problem Solving", text: "User-focused thinking" },
  { icon: Users, title: "Team Player", text: "Great collaboration" },
  { icon: TrendingUp, title: "Always Learning", text: "Modern technologies" },
];
export default function About({ personal }) {
  return (
    <section id="about" className="section container">
      <SectionHeading
        eyebrow="ABOUT ME"
        title="Building Web & Mobile Experiences"
      />
      <div className="about-grid">
        <div>
          <p className="section-body">{personal.about || personal.summary}</p>
          <div className="stats">
            <div>
              <Briefcase />
              <strong>{personal.years}+</strong>
              <span>Years of Experience</span>
            </div>
            <div>
              <Layers3 />
              <strong>Web + Mobile</strong>
              <span>Development Focus</span>
            </div>
          </div>
        </div>
        <div className="highlight-grid">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div className="glass-card highlight" key={title}>
              <Icon />
              <div>
                <strong>{title}</strong>
                <small>{text}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
