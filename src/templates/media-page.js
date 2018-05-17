import React from 'react'

const MediaPageTemplate = () => {
  return(
    <div></div>
  )

  // return (
  //   <section className="section section--gradient">
  //     <div className="container">
  //       <div className="columns">
  //         <div className="column is-10 is-offset-1">
  //           <div className="section">
  //             <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
  //               {title}
  //             </h2>
  //             <PageContent className="content" content={content} />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // )
}

export default MediaPageTemplate

// AboutPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func,
// }

// const AboutPage = ({ data }) => {
//   const { markdownRemark: post } = data

//   return (
//     <AboutPageTemplate
//       contentComponent={HTMLContent}
//       title={post.frontmatter.title}
//       content={post.html}
//     />
//   )
// }

// AboutPage.propTypes = {
//   data: PropTypes.object.isRequired,
// }

// export default AboutPage

// export const aboutPageQuery = graphql`
//   query AboutPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
