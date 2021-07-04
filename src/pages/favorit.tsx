import React, { ReactElement } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InfiniteImages from "../components/InfiniteImages"
import { PageProps } from "gatsby"

interface IProps {}

const Favorit: React.FC<IProps> = (): ReactElement => {
  return (
    <Layout>
      <SEO title="Favorit" />
      <div>
        <article className="message is-primary">
          <div className="message-header">
            <p>Notice</p>
          </div>
          <div className="message-body">
            <h1>Sorry to say</h1>
            <p>This page under development</p>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default Favorit
