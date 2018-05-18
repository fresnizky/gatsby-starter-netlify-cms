import React from 'react';
import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import Products from '../components/Products';
import Icons from '../components/Icons';
import CallToAction from '../components/CallToAction';
import Features from '../components/Features';

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const frontmatter = posts[0].node.frontmatter;
    const hero = frontmatter.hero;
    const reviews = frontmatter.reviews;
    const products = frontmatter.products;
    const icons = frontmatter.icons;
    const callToAction = frontmatter.callToAction;
    const features = frontmatter.features;

    console.log(features);

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <Hero {...hero}></Hero>
            <Reviews reviews={reviews}></Reviews>
            <Products {...products}></Products>
            <Icons {...icons}></Icons>
            <CallToAction {...callToAction}></CallToAction>
            <Features features={features}></Features>
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
            products{
              title
              description
              productList {
                icon
                name
                description
                actions
                price
                period
                taxes
                fees
              }
            }
            icons {
              title
              items {
                icon
              } 
            }
            callToAction {
              image
              text
            }
            features {
              align
              image
              subtitle
              text
              title
              video
            }
          }
        }
      }
    }
  }
`