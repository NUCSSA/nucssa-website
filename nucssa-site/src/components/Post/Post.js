import React, { Component } from "react";
import PropTypes from "prop-types";
import "prismjs/themes/prism-okaidia.css";

import asyncComponent from "../AsyncComponent";
// import Headline from "../Article/Headline";
// import Bodytext from "../Article/Bodytext";
// import Meta from "./Meta";
// import Author from "./Author";
// import Comments from "./Comments";
// import NextPrev from "./NextPrev";
// import axios from "axios";

const Share = asyncComponent(() =>
  import("./Share")
    .then(module => {
      return module.default;
    })
    .catch(error => {})
);

class Post extends Component {
  constructor(props) {
    super(props);
    const {
      post: {
        frontmatter: { link }
      }
    } = this.props;
    window.location.replace(link);
  }

  render() {
    return (
      <React.Fragment>
        跳转中...
        {/*<header>*/}
        {/*<Headline title={title} theme={theme} />*/}
        {/*<Meta prefix={prefix} author={author} category={category} theme={theme} />*/}
        {/*</header>*/}
        {/*<footer>*/}
        {/*<Share post={post} theme={theme} />*/}
        {/*<Author note={authornote} theme={theme} />*/}
        {/*<NextPrev next={nextPost} prev={prevPost} theme={theme} />*/}
        {/*<Comments slug={slug} facebook={facebook} theme={theme} />*/}
        {/*</footer>*/}
      </React.Fragment>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  authornote: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default Post;
