const responsibilities = [
  "Design and configure SharePoint Online sites with structured libraries, lists, and metadata.",
  "Develop custom SPFx web parts, applications, and components.",
  "Implement business automation using PowerApps and Power Automate workflows.",
  "Ensure governance, permissions, and security compliance within the SharePoint environment.",
  "Integrate Microsoft 365 tools and external apps.",
  "Collaborate with UI/UX designers and translate business needs into functional solutions.",
  "Provide documentation, training, and support to drive adoption.",
  "Troubleshoot and optimize SharePoint performance.",
];

const requirements = [
  "5+ years experience in SharePoint Online, SPFx, PowerApps, Power Automate.",
  "Proficient in JavaScript, Web API, SQL, HTML, and CSS.",
  "Experience in newsletters, surveys, permissions, governance, and compliance.",
  "Strong understanding of content governance and metadata management.",
  "Ability to gather requirements and build scalable solutions.",
  "Bachelor's degree required.",
];

const bonuses = [
  "Portfolio link or examples of previous SharePoint work.",
  "Knowledge of SEO principles and data migration strategies.",
];

export const hiringData = [
  {
    id: "sharepoint-developer",
    title: "SharePoint Developer",
    rate: "9 USD/hour",
    location: "Remote (India)",
    description:
      "We’re looking for a SharePoint Developer with 5+ years of experience in SharePoint Online, SPFx, Power Platform, and Microsoft 365 integration.",
    fullDescription: `
**Location:** India (Remote)  
**Contract:** 6 Months (Until end of 2025, possible extension)

We are hiring a stellar SharePoint Developer with strong hands-on expertise in SharePoint Online, SPFx, PowerApps, and Power Automate. The ideal candidate will have at least 5 years of experience and a proven track record of developing SharePoint components and solutions aligned with business needs.

**Key Responsibilities:**  
${responsibilities.map((item) => `• ${item}`).join("\n")}

**Requirements:**  
${requirements.map((item) => `• ${item}`).join("\n")}

**Bonus:**  
${bonuses.map((item) => `• ${item}`).join("\n")}

Apply now if you're passionate about building impactful SharePoint solutions.
    `.trim(),
  },
];
