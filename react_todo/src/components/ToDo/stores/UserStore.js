import { observable, action } from 'mobx';

class UserStore {
  @observable message = ''
  @observable messages = []
  
  @action('[UserStore] create new todo by click')
  createItem = () => {
    if(this.message !== '') {
      this.messages.push(this.message)
    }
    this.resetField()
  };

  @action('[UserStore] create new todo by press enter')
  setKeyPress = e => {
    if (e.target.value !== '') {
      if (e.key === 'Enter') {
        this.createItem()
        this.resetField()
      }
    }
  };

  @action('[UserStore] reset message')
  resetField = () => {
    this.message = '';
  }

  @action('[UserStore] set message')
  setField = value => {
    this.message = value;
  }

  @action('[UserStore] delete message')
  deleteItem = indexToDelete => {
    this.messages = this.messages.filter((toDo,index) => (
      index !== indexToDelete
    ))
  };
}

export default UserStore;
