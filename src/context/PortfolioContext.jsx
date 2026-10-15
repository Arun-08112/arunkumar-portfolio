import { createContext, useContext, useEffect, useState } from "react";
import { fetchPortfolio } from "../services/api";

const PortfolioContext = createContext(null);
const formatYearMonth = (value) =>
  value
    ? new Date(value).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "";

function shapeData(data) {
  const p = data.profile ?? {};
  const links = Object.fromEntries(
    data.socialLinks.map((link) => [link.platform.toLowerCase(), link.url]),
  );
  return {
    personal: {
      name: p.full_name || "Portfolio",
      initials: (p.full_name || "P")
        .split(" ")
        .map((x) => x[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
      headline: p.professional_title || "",
      summary: p.short_bio || "",
      about: p.about_me || "",
      location: p.location || "",
      email: p.email || "",
      linkedin: links.linkedin || "",
      github: links.github || "",
      resume: p.resume_url || "",
      profileImage: p.profile_image_url || "",
      years: p.years_of_experience ?? 0,
    },
    skills: data.skills.map((s) => s.skill_name),
    experience: data.experiences.map((e) => ({
      role: e.job_title,
      company: e.company_name,
      period: `${formatYearMonth(e.start_date)} – ${e.is_current ? "Present" : formatYearMonth(e.end_date) || "Present"}`,
      points: (e.description || "")
        .split(/\r?\n/)
        .map((x) => x.trim())
        .filter(Boolean),
    })),
    projects: data.projects.map((p, i) => ({
      title: p.project_name,
      description: p.short_description || "",
      category: "Featured Project",
      tags: p.technologies || [],
      icon: ["💬", "📊", "✨", "🧾"][i % 4],
      gradient: ["violet", "blue", "cyan", "pink"][i % 4],
      github: p.github_url || "",
      demo: p.live_demo_url || "",
    })),
    education: data.education.map((e) => ({
      degree: [e.degree, e.field_of_study].filter(Boolean).join(" – "),
      college: e.institution_name,
      period: [e.start_year, e.end_year].filter(Boolean).join(" – "),
    })),
  };
}
export function PortfolioProvider({ children }) {
  const [state, setState] = useState({ loading: true, error: "", data: null });
  const load = () => {
    setState((s) => ({ ...s, loading: true, error: "" }));
    fetchPortfolio()
      .then((result) =>
        setState({ loading: false, error: "", data: shapeData(result) }),
      )
      .catch((err) =>
        setState({
          loading: false,
          error:
            err.response?.data?.message ||
            err.message ||
            "Could not load portfolio",
          data: null,
        }),
      );
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <PortfolioContext.Provider value={{ ...state, retry: load }}>
      {children}
    </PortfolioContext.Provider>
  );
}
export const usePortfolio = () => {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be within PortfolioProvider");
  return ctx;
};
