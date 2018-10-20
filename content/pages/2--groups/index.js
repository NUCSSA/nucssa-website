import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    // const data = await axios.get(
    //   "https://gitlab.example.com/api/v4/projects/8724968/repository/files/discounts.json/raw?ref=master"
    // );
    console.log("is loading group.js");
    // const {
    //   data: {
    //     posts: { edges: posts = [] },
    //     bgDesktop: {
    //       resize: { src: desktop }
    //     },
    //     bgTablet: {
    //       resize: { src: tablet }
    //     },
    //     bgMobile: {
    //       resize: { src: mobile }
    //     }
    //   }
    // } = this.props;

    // const backgrounds = {
    //   desktop,
    //   tablet,
    //   mobile
    // };

    return (
      <React.Fragment>
        <h1>TEST</h1>
        <hr ref={this.separator} />
        <style jsx>{`
          hr {
            margin: 0;
            border: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  // data: PropTypes.object.isRequired
};

export default IndexPage;

//hero-background
