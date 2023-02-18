import GoogleLogo from "../../assets/images/companies/google.png";
import SpotifyLogo from "../../assets/images/companies/spotify.png";
import AirbnbLogo from "../../assets/images/companies/airbnb.png";
import type { SearchResult } from "./types";
import type { Item } from "src/common/Dropdown";

export const SKELETON_ITEM_NO = 10;

export const FILTERS: Item[] = [
  {
    title: "Most Relevant",
    id: "relavant",
  },
  {
    title: "Most Recent",
    id: "recent",
  },
];

export const SAMPLE_RESULTS: SearchResult[] = [
  {
    id: "1",
    jobTitle: "Sr. UX Designer",
    bgColor: "#5424FD",
    category: "Design and UX",
    jobType: "Full-Time",
    experienceLevel: "Senior Level",
    salary: "120K",
    isFeatured: true,
    company: {
      name: "Google",
      logo: GoogleLogo,
    },
    shortDescription: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
    dolore voluptatum a sit consequatur, doloribus ad unde, aliquam,
    ab accusantium distinctio ea omnis voluptatibus nemo consequuntur
    sint! Eaque, mollitia accusamus. Lorem ipsum dolor sit amet
    consectetur adipisicing elit.`,
  },
  {
    id: "2",
    jobTitle: "Project Manager",
    bgColor: "#fcc636",
    category: "Project Management",
    jobType: "Full-Time",
    experienceLevel: "Mid-Senior Level",
    salary: "60K",
    isFeatured: true,
    company: {
      name: "Spotify",
      logo: SpotifyLogo,
    },
    shortDescription: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
    dolore voluptatum a sit consequatur, doloribus ad unde, aliquam,
    ab accusantium distinctio ea omnis voluptatibus nemo consequuntur
    sint! Eaque, mollitia accusamus. Lorem ipsum dolor sit amet
    consectetur adipisicing elit.`,
  },
  {
    id: "3",
    jobTitle: "Junior Full Stack Engineer",
    bgColor: "#f5001e",
    category: "Software Development",
    jobType: "Full-Time",
    experienceLevel: "Entry Level",
    salary: "30K",
    isFeatured: false,
    company: {
      name: "Airbnb",
      logo: AirbnbLogo,
    },
    shortDescription: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
    dolore voluptatum a sit consequatur, doloribus ad unde, aliquam,
    ab accusantium distinctio ea omnis voluptatibus nemo consequuntur
    sint! Eaque, mollitia accusamus. Lorem ipsum dolor sit amet
    consectetur adipisicing elit.`,
  },
  {
    id: "4",
    jobTitle: "Backend Engineer",
    bgColor: null,
    category: "Software Development",
    jobType: "Full-Time",
    experienceLevel: "Entry Level",
    salary: null,
    isFeatured: false,
    company: {
      name: "Airbnb",
      logo: AirbnbLogo,
    },
    shortDescription: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
    dolore voluptatum a sit consequatur, doloribus ad unde, aliquam,
    ab accusantium distinctio ea omnis voluptatibus nemo consequuntur
    sint! Eaque, mollitia accusamus. Lorem ipsum dolor sit amet
    consectetur adipisicing elit.`,
  },
];
