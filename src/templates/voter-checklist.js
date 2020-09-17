import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Checklist from '../components/Checklist';
const blue = '#0A2458';

export const VoterChecklistPageTemplate = ({
  image,
  title,
  heading,
  description,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0 no-print"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: 'center',
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          backgroundColor: blue,
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns no-print">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="print-only" style={{ paddingLeft: '60px' }}>
            <h3 className="print-only has-text-weight-semibold is-size-2">
              My Voting Plan
            </h3>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Checklist />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

VoterChecklistPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const VoterChecklistPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <VoterChecklistPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        fullImage={frontmatter.full_image}
      />
    </Layout>
  );
};

VoterChecklistPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default VoterChecklistPage;

export const voterChecklistPageQuery = graphql`
  query VoterChecklistPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
