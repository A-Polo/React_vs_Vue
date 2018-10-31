import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { compose, withProps, lifecycle } from 'recompose'

import Button from '../Shared/Button'
import TextField from '../Shared/TextField'
import ToDoItem from './ToDoItem'

const enhance = compose(
  inject('store'),
  withProps(({ store: { userStore } }) => ({
    userStore: userStore
  })),
  lifecycle({
    componentDidMount() {
      //do something
    }
  }),
  observer
);

const ToDo = ({ userStore }) => (
  <div className="ToDo">
    <h1 className="ToDo-header">React To Do</h1>
    <div className="ToDo-container">
      <div className="ToDo-control">
        <TextField
          message={userStore.message}
          setMessage={userStore.setField}
          setKeyPress={userStore.setKeyPress}
        />
        <Button
          className="Button Button--add"
          onClick={userStore.createItem}>
          Add Item
        </Button>
      </div>
      <div className="ToDo-content">
        {userStore.messages.map((item, key) => (
            <ToDoItem
              key={key}
              item={item}
              deleteItem={() => userStore.deleteItem(key)}
            />
          )
        )}
      </div>
    </div>
  </div>
);

ToDo.propTypes = {
  userStore: PropTypes.shape({
    message: PropTypes.string.isRequired,
    setField: PropTypes.func.isRequired,
    setKeyPress: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    createItem: PropTypes.func.isRequired
  })
}

export default enhance(ToDo);
