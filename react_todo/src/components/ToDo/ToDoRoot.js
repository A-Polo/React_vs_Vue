import React from 'react';
import { Provider } from 'mobx-react';

import RootStore from './stores';
import ToDo from './ToDo';

const store = new RootStore();

const ToDoRoot = () => (
  <Provider store={store}>
    <ToDo />
  </Provider>
);

export default ToDoRoot;
