import React from 'react'
import Hero from '../components/Hero'
import Reviews from '../components/Reviews';

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props;
    const { edges: posts } = data.allMarkdownRemark
    const reviews = posts[0].node.frontmatter.reviews;

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <Hero {...posts[0].node.frontmatter.hero}></Hero>
            <Reviews reviews={reviews}></Reviews>
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
            reviews {
              text
              title
              user
              rank
            }
          }
        }
      }
    }
  }
`