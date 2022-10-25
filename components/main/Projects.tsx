import Link from 'next/link'
import React from 'react'
import SectionTitle from '../global/SectionTitle'
import projects from '@/data/content/projects'

import ProjectCard from '../projects/ProjectCard'

function Projects() {
  return (
    <div className="flex flex-col text-left justify-between relative">
      <div>
        <SectionTitle title="Projects " />
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {projects.map((item) => {
          return <ProjectCard key={item.id} project={item} />
        })}
      </div>
    </div>
  )
}

export default Projects
