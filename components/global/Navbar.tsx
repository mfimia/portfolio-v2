import Image from 'next/image'
import React, { FC } from 'react'

const Navbar: FC = (): JSX.Element => {
  return (
    <nav className="cursor-default mr-auto mt-4 ml-4">
      <span className="font-black text-xl flex items-center">
        <span className="mr-2">
          <Image
            className="mr-4 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
            src="/static/logos/mf_logo.svg"
            width="60"
            height="60"
            alt="MFimia icon"
          />
        </span>
        {'MFimia'.split('').map((letter, index) => {
          return (
            <span
              key={index}
              className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100"
            >
              {letter}
            </span>
          )
        })}
      </span>
    </nav>
  )
}

export default Navbar
