import resumePdf from "../assets/resume.pdf";

export type ProfileLinkIconName = "github" | "linkedin" | "resume";

export interface ProfileLink {
    icon: ProfileLinkIconName;
    /** Visible text and the accessible name for the link. */
    label: string;
    /** Set for links that leave the site. */
    external?: boolean;
    /** A URL, or the resolved path of an imported asset. */
    href: string;
}

/** Elsewhere-on-the-web links for the profile widget. */
export const profileLinks: ProfileLink[] = [
    {
        icon: "github",
        label: "GitHub",
        href: "https://github.com/urielbravo",
        external: true,
    },
    {
        icon: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/urielbravo/",
        external: true,
    },
    {
        icon: "resume",
        label: "Résumé",
        href: resumePdf,
    },
];

export const profile = {
    photoAlt: "Uriel, smiling at the camera",
    bio: "Hey, I'm Uriel. I build and maintain this site, and I spend my days automating tests as an automation engineer at a software company. Webmaster by choice, engineer by trade.",
};
