interface Social {
  name: string,
  link: string,
  icon: string,
  leavesWebsite: boolean
}

export const socials: Social[] = [
  {
    name: "GitHub",
    link: "https://github.com/mfimia",
    icon: "/static/icons/github-f.svg",
    leavesWebsite: true,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/martinfimia/",
    icon: "/static/icons/linkedin-f.svg",
    leavesWebsite: true,
  },
  {
    name: "Email",
    link: "mailto:martin.fimia.osuna@hotmail.com",
    icon: "/static/icons/mail-f.svg",
    leavesWebsite: true,
  },
]
