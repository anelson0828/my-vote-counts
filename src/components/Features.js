import React from 'react';
import PropTypes from 'prop-types';

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, i) => (
      <div key={item.text} className="column is-6">
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
              textShadow:
                '-5px -5px 0 red, 5px -5px 0 red, -5px 5px 0 red, 5px 5px 0 red',
              fontSize: '250px',
              letterSpacing: '-15px',
              opacity: 0.4,
              marginLeft: '-50px',
              marginTop: '-60px',
              width: '600px',
              color: 'white',
              padding: '20px',
            }}
          >
            {i + 1}
          </div>
          <div style={{ padding: '40px' }}>{item.text}</div>
        </div>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
