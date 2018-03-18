import React, { Component } from "react";
import Link from "gatsby-link";

import {
  StyledHeader,
  StyledSection,
  StyledUnorderedList,
  StyledListItem
} from "../styles/styled-components";
export default class IndexPage extends Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    // Uncomment to enable blogging via Netify
    // return (
    //   <section className="section">
    //     <div className="container">
    //       <div className="content">
    //         <h1 className="has-text-weight-bold is-size-2">Latest Posts</h1>
    //       </div>
    //       {posts
    //         .filter(post => post.node.frontmatter.templateKey === 'blog-post')
    //         .map(({ node: post }) => (
    //           <div
    //             className="content"
    //             style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
    //             key={post.id}
    //           >
    //             <p>
    //               <Link className="has-text-primary" to={post.fields.slug}>
    //                 {post.frontmatter.title}
    //               </Link>
    //               <span> &bull; </span>
    //               <small>{post.frontmatter.date}</small>
    //             </p>
    //             <p>
    //               {post.excerpt}
    //               <br />
    //               <br />
    //               <Link className="button is-small" to={post.fields.slug}>
    //                 Keep Reading →
    //               </Link>
    //             </p>
    //           </div>
    //         ))}
    //     </div>
    //   </section>
    // )
    return (
      <div>
        <StyledHeader>
          <h1>Erik Reyna</h1>
        </StyledHeader>
        <StyledSection>
          Erik Reyna is currently a software developer at The Washington Post.
          He also enjoys taking pictures and playing music in his free time.
        </StyledSection>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
