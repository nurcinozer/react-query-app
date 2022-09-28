type PageInfoProps = {
  title: string;
  description: string;
};

export const PageInfo: React.FC<PageInfoProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">{title}</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">{description}</p>
    </div>
  )
}