// Phase 1: static frontend data. Later replace these exports with API responses.
// Replace placeholder URLs and add real project screenshots when available.
export const personal = {
  name: 'Arunkumar G',
  initials: 'AG',
  headline: 'React Developer | Full Stack Developer | React Native Developer',
  summary: 'Software developer with 4+ years of experience building responsive web and mobile applications. I create clean, scalable and user-friendly experiences with React, React Native, Node.js and modern UI frameworks.',
  location: 'Chennai, Tamil Nadu',
  email: 'arunkumarg@gmail.com', // Check and replace with the email you want publicly visible
  linkedin: '', // Add your real LinkedIn profile URL
  github: '', // Add your real GitHub profile URL
  resume: '/resume.pdf' // Place your PDF at public/resume.pdf
};

export const skills = [
  'React.js', 'React Native', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js',
  'Redux', 'REST APIs', 'MySQL', 'PostgreSQL', 'MongoDB', 'HTML5', 'CSS3',
  'Bootstrap', 'Ant Design', 'PrimeReact', 'Git', 'Figma'
];

export const experience = [
  { role: 'Software Developer', company: 'Komet Technology Solutions Pvt. Ltd.', period: 'Apr 2026 – Present', points: ['Build responsive web applications with React.js and scalable backend services using Node.js.', 'Develop cross-platform mobile apps with React Native.', 'Manage MySQL databases and implement APIs for seamless data flow.', 'Build reusable components and improve state management.'] },
  { role: 'Frontend Developer', company: 'KKB Infotrip Pvt. Ltd.', period: 'Apr 2025 – Mar 2026', points: ['Developed dynamic web apps with React.js and JavaScript.', 'Integrated APIs and authentication features.', 'Expanded into backend development with Node.js.'] },
  { role: 'UI/UX Designer & Frontend Developer', company: 'Rayn Systems Pvt. Ltd.', period: 'Jan 2023 – Mar 2025', points: ['Designed intuitive interfaces and converted designs into functional React components.', 'Applied Redux / Context API for efficient state management.', 'Collaborated on high-performance application features.'] },
  { role: 'Associate – Customer Support', company: 'Sutherland Global Services Pvt. Ltd.', period: 'Jul 2022 – Dec 2022', points: ['Resolved technical queries and maintained customer satisfaction.'] }
];

export const projects = [
  { title: 'Student Bubble Application', category: 'Mobile Application', description: 'Student community app with chat, location sharing and real-time messaging.', tags: ['React Native', 'Node.js', 'PostgreSQL', 'WebSocket'], icon: '💬', gradient: 'violet', github: '', demo: '' },
  { title: 'SEW – AGV Monitoring Website', category: 'Web Dashboard', description: 'Real-time AGV monitoring and performance analytics dashboard.', tags: ['React.js', 'Redux', 'PrimeReact'], icon: '📊', gradient: 'blue', github: '', demo: '' },
  { title: 'Clean Task', category: 'Booking Platform', description: 'Responsive cleaning-service booking platform with a modern UI and API integration.', tags: ['React.js', 'Ant Design', 'REST API'], icon: '✨', gradient: 'cyan', github: '', demo: '' },
  { title: 'Restaurant Billing Software', category: 'Mobile Application', description: 'Android app for order processing, inventory tracking and billing workflows.', tags: ['React Native', 'Node.js', 'MySQL'], icon: '🧾', gradient: 'pink', github: '', demo: '' }
];

export const education = [
  { degree: 'MCA', college: 'S.A. Engineering College', period: '2020 – 2022' },
  { degree: 'B.Sc. Computer Science', college: 'Sadakathullah Appa College', period: '2017 – 2020' }
];
