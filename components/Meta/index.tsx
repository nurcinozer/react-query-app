import Head from "next/head"

const DEFAULT_META_PROPS = {
  title: "Movie App",
  description: "Movie App",
  keywords: "Movie App",
}

export type MetaProps = {
  title?: string
  description?: string
  keywords?: string
}

export const Meta: React.FC<MetaProps> = ({
  title = DEFAULT_META_PROPS.title,
  description = DEFAULT_META_PROPS.description,
  keywords = DEFAULT_META_PROPS.keywords,
}) => {
  return (
    <Head>
      <meta charSet="UTF-8" key="charset" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,user-scalable=0"
        key="viewport"
      />
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta name="keywords" content={keywords} key="keywords" />
    </Head>
  )
}