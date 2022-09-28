import Link from "next/link"
import { MovieIcon } from "../Icons"

export const Navbar = () => {
  return (
    <header className="border-b border-gray-800">
      <div className="flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <Link href="/" passHref>
          <div className="cursor-pointer flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
            <MovieIcon />
            <span className="ml-3 text-xl">Movie App</span>
          </div>
        </Link>
      </div>
    </header>
  )
}