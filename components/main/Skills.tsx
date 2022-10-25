/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { skills } from '@/data/content/home'
import SectionTitle from '../global/SectionTitle'

function Skills() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div>
        <SectionTitle title="Tech stack " />
      </div>
      <div>
        <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
          {skills.map((item, index) => {
            return (
              <div
                title={item.title}
                key={index}
                className="w-10 mx-auto flex items-center flex-col justify-center"
              >
                <img src={item.icon} style={item.style} />
                <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                  {item.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
