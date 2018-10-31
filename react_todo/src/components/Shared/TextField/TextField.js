import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ setMessage, message, setKeyPress }) => (
  <input
    className="TextField"
    onKeyDown={e => setKeyPress(e)}
    placeholder="Enter your point here"
    onChange={e => setMessage(e.target.value)}
    value={message}
  />
);

TextField.propTypes = {
  setKeyPress: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default TextField;
