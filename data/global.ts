interface Social {
  name: string,
  link: string,
  icon: string,
  leavesWebsite: boolean
}

export const socials: Social[] = [
  {
    name: "GitHub",
    link: "https://github.com/braydentw",
    icon: "/static/icons/github-f.svg",
    leavesWebsite: true,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/braydentw/",
    icon: "/static/icons/linkedin-f.svg",
    leavesWebsite: true,
  },
  {
    name: "Email",
    link: "mailto:contact@braydentw.io",
    icon: "/static/icons/mail-f.svg",
    leavesWebsite: true,
  },
]
