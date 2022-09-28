import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  image: string;
  releaseDate: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  releaseDate,
}) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
        <Image src={image} alt={title} width={300} height={300} className="rounded w-full object-cover object-center mb-6" />
        <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">{releaseDate}</h3>
        <h2 className="text-lg text-white font-medium title-font mb-4">{title}</h2>
        <p className="leading-relaxed text-base">{description}</p>
      </div>
    </div>
  )
}