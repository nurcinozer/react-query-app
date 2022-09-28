import type { NextPage } from "next"
import { Hero } from "../components"
import { Layout } from "../components/Layout"

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default Home
