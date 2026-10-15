import SectionHeading from "./SectionHeading";
import { Code2 } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiAntdesign,
  SiSocketdotio,
} from "react-icons/si";

const icons = {
  "react.js": SiReact,
  react: SiReact,
  "react native": SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  "node.js": SiNodedotjs,
  "express.js": SiExpress,
  redux: SiRedux,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  html5: SiHtml5,
  css3: SiCss,
  bootstrap: SiBootstrap,
  "tailwind css": SiTailwindcss,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  "ant design": SiAntdesign,
  websocket: SiSocketdotio,
};

export default function Skills({ skills = [] }) {
  return (
    <section id="skills" className="section container">
      <SectionHeading
        eyebrow="MY TECH STACK"
        title="Technologies I Work With"
        description="Tools I use across frontend, mobile, backend, and databases."
      />
      {skills.length ? (
        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = icons[skill.trim().toLowerCase()] || Code2;
            return (
              <div className="skill-tile" key={skill}>
                <span className="skill-symbol">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <span>{skill}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="section-body">Skills haven't been added yet.</p>
      )}
    </section>
  );
}
