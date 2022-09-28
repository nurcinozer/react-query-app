import type { NextPage } from "next"
import { Card, Layout, PageInfo } from "../components"
const MoviesPage: NextPage = () => {
  return (
    <Layout>
      <section className="px-5 py-24">
        <PageInfo title="Movies" description="Movie App is a global social network for grass-roots film discovery. Use it as a discovery to find films as you watch them." />
        <div className="flex flex-wrap -m-4">
          <Card title="Younger" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." image={`https://streamcoimg-a.akamaihd.net/000/143/24/14324-PosterArt-a0168953a3b93681dbd60c7bcc50a0af.jpg`} releaseDate="2020" />
        </div>
      </section>
    </Layout>
  )
}

export default MoviesPage