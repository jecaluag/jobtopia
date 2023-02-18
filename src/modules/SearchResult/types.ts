import type { StaticImageData } from "next/image";

export interface SearchResult {
  id: string;
  jobTitle: string;
  bgColor: string | null;
  shortDescription: string;
  jobType: string;
  experienceLevel: string;
  category: string;
  isFeatured: boolean;
  salary: string | null;
  company: {
    name: string;
    logo: StaticImageData;
  };
}
