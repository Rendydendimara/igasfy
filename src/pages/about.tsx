import React, { ReactElement } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface IProps {}

const Favorit: React.FC<IProps> = (): ReactElement => {
  return (
    <Layout>
      <SEO title="About" />
      <article className="message is-primary">
        <div className="message-header custom-background-primary">
          <p className="is-size-2">About Us</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          <h2 className="is-size-5 custom-color-black custom-margin-mb-1">
            Welcome to Igasfy
          </h2>
          <p className="custom-color-black custom-margin-mb-1">
            Igasfy is website which provides image content with high quality,
            there are lots of images supported on Igasfy, of course, there are
            various categories with HD quality.
          </p>
          <p className="custom-color-black custom-margin-mb-1">
            All image content on Igasfy is free, free to use either for
            commercial or personal use.
          </p>
          <p className="custom-color-black custom-margin-mb-1">
            The image source is obtained from a platform powered by an amazing
            community that has gifted hundreds of thousands of their own photos
            to fuel creativity around the world.
          </p>
          <p className="custom-color-black custom-margin-mb-1">
            Develop by{" "}
            <a
              className="custom-color-primary"
              href="https://rendydinar.dev"
              target="_blank"
              rel="noreferrer"
            >
              rendydinar
            </a>
          </p>
        </div>
      </article>
    </Layout>
  )
}

export default Favorit
