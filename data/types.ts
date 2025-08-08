import type{ Metadata } from "next";

type Text = string | string[];



export type Experience = {
    title: string;
    organisation?: string;
    location?: string;
    time?: string;
    contract?: "Full-time" | "Part-time" | "Freelance";
    office?: "Remote" | "On-site" | "Hybrid";
    content: string[]
}
export type Education = {
    title: string;
    time?: string;
    org?: string;
    content: string[];

    authenticity?: {
        issueDate: string;
        expirationDate?: string;
        credentialId: string;
        credentialUrl: string;
    }
}

export type Skill = {
    title: string;
    content: string[];
}

export interface Website {
    meta: Metadata,
    title: string;
    desc: string;
    footer: string;
}

export interface Profile {
    firstName: string;
    lastName: string;
    aka?: string;
    roles: string[];
    description: string[];
    
    githubLink: string,
    linkedinLink: string,
    twitterLink: string,
    websiteLink: string,
    email: string,
    phone: string
} 
export interface Resume {
    summary: string;
    experiences: Experience[];
    educations: Education[];
    skills: Skill[]
}

export interface Project {
    category: 'PORTFOLIO' | 'PERSONAL' | 'PROFESSIONAL' | 'OTHER';
    status: 'UPCOMING' | 'ONGOING' | 'COMPLETED';
    hidden?: boolean;
    id: string;
    
    title: string;
    tagline: string;
    links?: AnchorLink[];
    
    overview: string[];
    technologies: string[];
    keyFeatures: string[];
    whatLearned?: string[];
    futureImprovements?: string[]

    gallery?: string[]

    // gallery
    // contributors
}
    
type AnchorLink = {
    label: string
    href: string 
}  


