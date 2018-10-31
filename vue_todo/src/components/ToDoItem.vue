<template>
  <div class="ToDoItem">
    <p class="ToDoItem-text">{{todo.text}}</p>
    <div class="ToDoItem-delete"
         @click="deleteItem(todo)">-
    </div>
  </div>
</template>

<script>
  export default {
    name: "to-do-item",
    props: ['todo'],
    methods: {
      deleteItem(todo) {
        this.$emit('delete', todo)
      }
    }
  }
</script>

<style>
  .ToDoItem {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .ToDoItem-text {
    width: 90%;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    padding: 12px;
    margin-right: 10px;
  }

  .ToDoItem-delete {
    color: #ffffff;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    outline: none;width: 35px;
    height: 35px;
    background: #ff7373;
    border-radius: 10px;
    font-size: 18px;
    box-sizing: border-box;
  }
  .ToDoItem-delete:hover {
    background: #ff0207;
  }
</style>
