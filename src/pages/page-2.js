import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Pawdwdd" />
    <h1>str druda</h1>
    <p>ggggg</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
