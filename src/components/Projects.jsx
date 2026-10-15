import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
export default function Projects({ projects }) {
  return (
    <section id="projects" className="section container">
      <SectionHeading
        eyebrow="FEATURED PROJECTS"
        title="Some of My Recent Work"
        description="Selected applications and platforms I've worked on."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className={`project-art ${project.gradient}`}>
              <span
                className="project-emoji"
                role="img"
                aria-label={project.category}
              >
                {project.icon}
              </span>
              <span className="project-category">{project.category}</span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <span className="muted-link">Demo coming soon</span>
                )}
                {project.github && (
                  <a
                    aria-label={`${project.title} source code`}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
