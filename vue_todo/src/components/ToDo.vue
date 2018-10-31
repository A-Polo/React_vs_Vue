<template>
  <div id="app" class="u-fullHeight">
    <div class="ToDo">
      <h1 class="ToDo-header">Vue To Do</h1>
      <div class="ToDo-container">
        <div class="ToDo-control">
          <input class="ToDo-textField" type="text" v-model="todo" v-on:keyup.enter="createItem"/>
          <div class="ToDo-add" @click="createItem()">Add Item</div>
        </div>
        <div class="ToDo-content">
          <ToDoItem v-for="todo in list"
                    :todo="todo"
                    @delete="deleteItem"
                    :key="todo.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ToDoItem from './ToDoItem.vue';
  export default {
    name: 'to-do',
    components: {
      ToDoItem
    },
    data() {
      return {
        list: [],
        todo: ''
      }
    },
    methods: {
      createItem() {
        if (!this.todo){
          return
        }
        const newId = Math.max.apply(null, this.list.map(t => t.id)) + 1;
        this.list.push({ id: newId, text: this.todo});
        this.todo = '';
      },
      deleteItem(todo){
        this.list = this.list.filter(item => item !== todo);
      }
    },
  }
</script>

<style>
  .u-fullHeight {
    height: 100%;
  }

  .ToDo {
    text-align: center;
    border: 1px solid white;
    height: 100%;
    background: #f6f6f6;
    padding-bottom: 60px;
    overflow: auto;
  }

  .ToDo-header {
    color: black;
    font-weight: 400;
    text-transform: uppercase;
  }

  .ToDo-content {
    width: 50%;
    margin: 0 auto;
  }

  .ToDo-control {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .ToDo-container {
    width: 80%;
    margin: 0 auto;
  }

  .ToDo-textField {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    margin: 10px auto;
    box-shadow: none;
    outline: none;
    box-sizing: border-box;
  }

  .ToDo-add {
    color: #ffffff;
    font-size: 16px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    outline: none;
    background: #73ff73;
    border-radius: 3px;
  }

  .ToDo-add:hover {
    background: #416632;
  }
</style>
