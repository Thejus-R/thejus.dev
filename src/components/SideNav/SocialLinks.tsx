import Image from "next/image";

type SocialLinkType = {
  name: string;
  icon: string;
  link: string;
};

const socialLinks: SocialLinkType[] = [
  {
    name: "LinkedIn",
    icon: "linkedin-logo-fill",
    link: "https://www.linkedin.com/in/thejus-r/",
  },
  {
    name: "Medium",
    icon: "medium-logo-fill",
    link: "https://thejusr.medium.com",
  },
  {
    name: "Behance",
    icon: "behance-logo-fill",
    link: "https://www.behance.net/thejus-r",
  },
  {
    name: "GitHub",
    icon: "github-logo-fill",
    link: "https://github.com/thejus-r",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex justify-between h-fit">
      {socialLinks.map((link) => (
        <SocialLink
          icon={link.icon}
          name={link.name}
          link={link.link}
          key={link.name}
        />
      ))}
    </div>
  );
}

function SocialLink(socialLink: SocialLinkType) {
  return (
    <a
      className="outline outline-1 hover:bg-gray-100 hover:outline-gray-300 transition-all duration-300 outline-gray-200 rounded-xl h-12 w-12 flex items-center justify-center"
      href={socialLink.link}
      target="_blank"
    >
      <Image
        src={`/icons/${socialLink.icon}.svg`}
        alt={socialLink.name}
        width={20}
        height={20}
      />
    </a>
  );
}
