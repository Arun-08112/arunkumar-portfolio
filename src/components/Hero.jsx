import { useState } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
} from "lucide-react";
export default function Hero({ personal }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  // const photoUrl = personal.profileImage || "/profile.jpg";
  const photoUrl ="/Arun_profile.jpeg";
  return (
    <section id="home" className="hero container">
      <div className="hero-copy reveal">
        <span className="eyebrow">HELLO, I'M</span>
        <h1>{personal.name}</h1>
        <h2>{personal.headline}</h2>
        <p>{personal.summary}</p>
        <div className="hero-buttons">
          <a className="btn btn-primary" href="#contact">
            Let's Talk <ArrowRight size={17} />
          </a>
          {personal.resume && (
            <a
              className="btn btn-outline"
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
            >
              <Download size={17} /> Download Resume
            </a>
          )}
        </div>
        <div className="socials">
          {personal.linkedin && (
            <a
              aria-label="LinkedIn"
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={19} />
            </a>
          )}
          {personal.github && (
            <a
              aria-label="GitHub"
              href={personal.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={19} />
            </a>
          )}
          {personal.email && (
            <a aria-label="Email" href={`mailto:${personal.email}`}>
              <Mail size={19} />
            </a>
          )}
        </div>
      </div>
      <div className="hero-visual reveal">
        <div className="portrait-orbit">
          <div className="portrait">
            {!photoFailed ? (
              <img
                className="profile-photo"
                src={photoUrl}
                alt={`${personal.name} profile`}
                onError={() => setPhotoFailed(true)}
              />
            ) : (
              <div className="portrait-placeholder" aria-label="Default developer avatar">
                <Code2 size={104} strokeWidth={1.3} />
                <span>CREATE • BUILD • GROW</span>
              </div>
            )}
          </div>
        </div>
        <div className="floating-card experience-pill">
          <span className="online-dot" /> {personal.years}+ Years Experience
        </div>
        <div className="floating-card location-pill">
          <MapPin size={16} />
          {personal.location}
        </div>
      </div>
    </section>
  );
}
