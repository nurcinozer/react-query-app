import Image from "next/image"
import { useRouter } from "next/router"
import { Button } from ".."

export const Hero = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/movies");
  };

  return (
    <section className="text-gray-400 body-font h-hero flex justify-center items-center">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Welcome.
          </h1>
          <p className="mb-8 leading-relaxed">Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className="flex justify-center gap-4">
            <Button color="primary" onClick={() => handleRoute()}>Movies</Button>
            <Button color="secondary">TV Shows</Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image src="/images/hero.jpg" width={640} height={425} alt="hero" />
        </div>
      </div>
    </section>
  )
}