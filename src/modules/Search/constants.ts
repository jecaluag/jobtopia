export const SEARCH_INPUT_PLACEHOLDER =
  "Search job titles, companies or skills";

export const WORK_TYPES = [
  "Full-Time",
  "Part-Time",
  "Contractor",
  "Temporary",
  "Internship",
  "Volunteer",
  "Other",
];

export const SALARY_RANGE = [0, 200000];

export const DEFAULT_RANGE_SLIDER_STEP = 5000;

export const EXPERIENCE_LEVELS = [
  "Entry Level",
  "Associate",
  "Mid Level",
  "Mid-Senior Level",
  "Senior Level",
  "Director",
  "Executive",
];

export const TAG_TYPE_KEYS = {
  skills: "skills",
  companies: "companies",
  jobTitle: "jobTitle",
};

export const tagColorClassNames = {
  [TAG_TYPE_KEYS.skills]: "bg-blue-100 text-blue-800",
  [TAG_TYPE_KEYS.companies]: "bg-green-100 text-green-800",
  [TAG_TYPE_KEYS.jobTitle]: "bg-yellow-100 text-yellow-800",
};

export const sampleTags = [
  {
    id: 1,
    name: "React",
    type: TAG_TYPE_KEYS.skills,
  },
  {
    id: 2,
    name: "React Native",
    type: TAG_TYPE_KEYS.skills,
  },
  {
    id: 3,
    name: "JavaScript",
    type: TAG_TYPE_KEYS.skills,
  },
  {
    id: 4,
    name: "Accenture",
    type: TAG_TYPE_KEYS.companies,
  },
];
