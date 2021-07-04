// If you don't want to use TypeScript you can delete this file!
import React, { ReactElement } from "react"
import { Link, PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bulma/css/bulma.min.css"
import "./styles.css"
interface IProps {}

const IndexPage: React.FC<IProps> = (): ReactElement => (
  <Layout>
    <SEO title="Home" />
    <div className="has-text-centered" style={{ marginTop: "20%" }}>
      <h1 className="is-size-2">Welcome to Igasfy</h1>
      <h1 className="is-size-4">Where you find images ✨🌈</h1>
      <p className="is-size-6" style={{ marginTop: "2%" }}>
        Find image by clicking not typing 😴
      </p>
      <button
        className="button is-dark is-large"
        style={{ marginTop: "10%", backgroundColor: "var(--color-secondary)" }}
      >
        <Link to="/gallery/" className="has-text-white">
          Gallery 🚀🚀
        </Link>
      </button>
    </div>
  </Layout>
)

export default IndexPage
