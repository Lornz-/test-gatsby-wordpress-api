import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <p>
      {data.allWordpressPost.totalCount}{" "}
      {data.allWordpressPost.totalCount > 1 ? `Posts` : `Post`}
    </p>

    <ul style={{ listStyle: `none`, marginLeft: `0` }}>
      {data.allWordpressPost.edges.map(({ node }) => (
        <li>
          <h2>
            <Link
              to={node.slug}
              dangerouslySetInnerHTML={{
                __html: node.title,
              }}
            />
          </h2>

          <div
            dangerouslySetInnerHTML={{
              __html: node.excerpt,
            }}
          />

          <time
            dateTime={node.date}
            dangerouslySetInnerHTML={{
              __html: new Date(node.date).toISOString().slice(0, 10),
            }}
          />
        </li>
      ))}
    </ul>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          date
          slug
        }
      }
      totalCount
    }
  }
`
