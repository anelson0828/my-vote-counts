import React from 'react';
import PropTypes from 'prop-types';

const blue = '#0A2458';

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, i) => (
      <div key={item.text}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'sans-serif',
              textShadow: `-5px -5px 0 ${blue}, 5px -5px 0 ${blue}, -5px 5px 0 ${blue}, 5px 5px 0 ${blue}`,
              fontSize: '250px',
              letterSpacing: '-15px',
              opacity: 0.4,
              marginLeft: '-50px',
              marginTop: '-60px',
              width: '100px',
              color: 'white',
              padding: '20px',
              position: 'relative',
            }}
          >
            {i < 9 && 0}
            {i + 1}
          </div>
          <div style={{ paddingLeft: '210px' }}>
            <div className="has-text-weight-bold pad2">{item.title}</div>
            <div>{item.text}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
