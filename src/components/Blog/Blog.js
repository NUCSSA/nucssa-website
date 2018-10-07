import PropTypes from "prop-types";
import React from "react";
import _ from "lodash";
import Item from "./Item";
import { Grid, Row, Col } from "react-bootstrap";

const Blog = props => {
  const { posts, theme } = props;
  const size = 4; // Number of items in a row
  const rows = _.chunk(posts, size);
  return (
    <React.Fragment>
      <main className="main">
        {/*<ul>*/}
        <Grid>
          <Row>
            {_.map(rows, (row, index) => {
              const itemList = _.map(row, post => {
                const {
                  node,
                  node: {
                    fields: { slug }
                  }
                } = post;
                return (
                  <Col key={slug} sm={6} md={4}>
                    <Item post={node} theme={theme} />
                  </Col>
                );
              });
              return <div key={index}>{itemList}</div>;
            })}
          </Row>
        </Grid>
        {/*{posts.map(post => {*/}
        {/*const {*/}
        {/*node,*/}
        {/*node: {*/}
        {/*fields: { slug }*/}
        {/*}*/}
        {/*} = post;*/}
        {/*return <Item key={slug} post={node} theme={theme} />;*/}
        {/*})}*/}
        {/*</ul>*/}
      </main>

      {/* --- STYLES --- */}
      <style jsx>{`
        .main {
          padding: 0 ${theme.space.inset.default};
        }

        ul {
          list-style: none;
          margin: 0 auto;
          // padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
        }

        @above tablet {
          .main {
            padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
          }
          ul {
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @above desktop {
          ul {
            max-width: ${theme.text.maxWidth.desktop};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Blog;
