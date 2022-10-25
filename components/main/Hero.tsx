/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'

const Hero: FC = (): JSX.Element => {
  return (
    <div
      className="relative heroElem w-full pt-20 pb-10 sm:pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
      style={{ maxWidth: '1200px' }}
    >
      <p className="text-xl mb-5">Hey, I&apos;m Martin</p>
      <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
        I create <span className="heroShiny1 text-fun-pink">elegant</span> and{' '}
        <span className="heroShiny2 text-fun-pink">powerful</span> user
        interfaces
        <img
          className="sqD hidden sm:block top-[-120px] right-[5%] sm:right-[170px]"
          style={{ animationDelay: '0.1s' }}
          src="/static/svg/game_dev.svg"
        />
        <img
          className="sqD hidden sm:block right-[70px] lg:right-[10px] bottom-[-150px]"
          style={{ animationDelay: '0.3s' }}
          src="/static/svg/github-f.svg"
        />
        <img
          className="sqD hidden lg:block bottom-[-200px] left-[-80px]"
          style={{ animationDelay: '0.4s' }}
          src="/static/svg/desktop.svg"
        />
        <img
          className="sqD hidden sm:block left-[80px] lg:left-[150px] bottom-[-150px]"
          style={{ animationDelay: '0.5s' }}
          src="/static/svg/mobile_app.svg"
        />
        <img
          className="sqD hidden sm:block bottom-[-220px] right-[30%] w-[240px]"
          style={{ animationDelay: '0.6s' }}
          src="/static/svg/mf_logo.svg"
        />
        <img
          className="sqD hidden sm:block left-[-10px] top-[-90px] sm:left-5"
          style={{ animationDelay: '0.9s' }}
          src="/static/svg/backend.svg"
        />
      </h1>
    </div>
  )
}

export default Hero
