import React from 'react'
import Hero from '../components/Hero'

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props;
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <Hero {...posts[0].node.frontmatter.hero}></Hero>
          </div>
        </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "Consumer"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            hero {
              title
              text
              video
              background
            }
          }
        }
      }
    }
  }
`