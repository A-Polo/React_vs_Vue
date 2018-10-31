import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Shared/Button'

const ToDoItem = ({ item, deleteItem }) => (
  <div className="ToDoItem">
    <p className="ToDoItem-text">{item}</p>
    <Button className="Button Button--delete" onClick={deleteItem}>-</Button>
  </div>
);

ToDoItem.propTypes = {
  item: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default ToDoItem;
