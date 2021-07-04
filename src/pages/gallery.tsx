import React, { ReactElement } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InfiniteImages from "../components/InfiniteImages"
import { PageProps } from "gatsby"

interface IProps {}

const Gallery: React.FC<IProps> = (): ReactElement => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <InfiniteImages />
    </Layout>
  )
}

export default Gallery
