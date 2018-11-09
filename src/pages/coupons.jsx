import React from "react";
import { graphql } from "gatsby";
import Coupon from "../components/Coupon/Coupon";

class CouponsPage extends React.Component {
  render() {
    const {
      data: {
        coupons: { edges: coupons = [] }
      }
    } = this.props;

    console.log(coupons);

    const style = {}; 
    style.container = { marginTop: "100px", textAlign: "center"}; 

    return (
      <div style={style.container}>
        <h1>商家折扣券</h1>
        <ul>
          {coupons.map(coupon => <li><Coupon coupon={coupon} /></li>)}
        </ul>
      </div>
    )
  }
}

export default CouponsPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query couponsQuery {
    coupons: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//pages/partners/coupons/" } }, sort: { fields: [fields___prefix], order: ASC }) {
      edges {
        node {
          id
          fields {
            slug
            prefix
          }
          frontmatter {
            business
            url
            coupon
            address
            phone
            email
            image {
              id
              relativePath
            }
          }
        }
      }
    }
  }
`;