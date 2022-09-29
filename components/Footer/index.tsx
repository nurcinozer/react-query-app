import Link from "next/link"
import { LinkedinIcon, MovieIcon, TwitterIcon } from "../Icons"

export const Footer = () => {
  return (
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <Link href="/" passHref>
        <div className="cursor-pointer flex order-first lg:order-none title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <MovieIcon />
          <span className="ml-3 text-xl">Movie App</span>
        </div>
      </Link>
      <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2022 Movie App —
        <Link href="https://twitter.com/nurcinozer" passHref>
          <span className="text-gray-500 ml-1 cursor-pointer">
            @nurcinozer
          </span>
        </Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link href="https://twitter.com/nurcinozer" passHref>
          <div className="cursor-pointer">
            <TwitterIcon />
          </div>
        </Link>
        <Link href="https://linkedin.com/in/nurcin/" passHref>
          <div className="ml-4 cursor-pointer">
            <LinkedinIcon />
          </div>
        </Link>
      </span>
    </div>
  )
}