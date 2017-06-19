import React from 'react';

class TodoForm extends React.Component {
  addTodo = (e) => {
    e.preventDefault();
    let item = this.item.value
    this.props.addTodoItem(item)
    this.form.reset();
  }

  render() {
    return (
      <form ref={ n => this.form = n } onSubmit={this.addTodo}>
        <input ref={ n => this.item = n } placeholder="Add a todo" />
      </form>
    )
  }
}

export default TodoForm;
