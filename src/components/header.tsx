// import * as React from "react"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"

import { Link } from "gatsby"
import React from "react"

interface IProps {
  siteTitle: string
}

const Header: React.FC<IProps> = ({ siteTitle }) => (
  <header>
    <nav
      className="navbar is-dark"
      style={{ marginBottom: "2em", backgroundColor: "var(--color-primary)" }}
    >
      <div className="navbar-brand">
        <Link
          to="/"
          style={{
            marginLeft: "3em",
            padding: "10px",
          }}
          className="has-text-white is-size-3"
        >
          {siteTitle} 💡
        </Link>
      </div>
      <div className="navbar-end" style={{ marginRight: "3em" }}>
        <div className="navbar-item">
          <Link
            to="/"
            style={{
              padding: "10px",
            }}
            className="has-text-white"
          >
            Home
          </Link>
          <Link
            to="/gallery/"
            style={{
              padding: "10px",
            }}
            className="has-text-white"
          >
            Gallery
          </Link>
          <Link
            to="/favorit/"
            style={{
              padding: "10px",
            }}
            className="has-text-white"
          >
            Favorit
          </Link>
          <Link
            to="/about"
            style={{
              padding: "10px",
            }}
            className="has-text-white"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
