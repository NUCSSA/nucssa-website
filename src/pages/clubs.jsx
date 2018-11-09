import React from "react";
import { graphql } from "gatsby";

class ClubsIndexPage extends React.Component {
  render() {
    const {
      data: {
        clubs: { edges: clubs = [] }
      }
    } = this.props;

    console.log(clubs);

    const style = {};
    style.container = { marginTop: "100px", textAlign: "center" };

    return <div style={style.container} />;
  }
}

export default ClubsIndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query clubsQuery {
    clubs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/clubs/" } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          id
          fields {
            slug
            prefix
          }
          frontmatter {
            club_name
            president
            phone
            email
            wechat
            workshop_time
            activity_location
          }
        }
      }
    }
  }
`;
