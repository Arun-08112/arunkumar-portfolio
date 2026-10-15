import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  timeout: 10000,
});

export async function fetchPortfolio() {
  const [profile, skills, projects, experiences, education, socialLinks] = await Promise.all([
    api.get('/profile'), api.get('/skills'), api.get('/projects'),
    api.get('/experiences'), api.get('/education'), api.get('/social-links'),
  ]);
  return {
    profile: profile.data.data,
    skills: skills.data.data,
    projects: projects.data.data,
    experiences: experiences.data.data,
    education: education.data.data,
    socialLinks: socialLinks.data.data,
  };
}
export default api;
