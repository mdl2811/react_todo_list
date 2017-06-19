import React from 'react';
import List from './List';
import TodoForm from './TodoForm';
import Filter from './Filter';

class TodoApp extends React.Component {
  state = { items: [], id: 0, filter: 'All' }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  filteredItems = () => {
    let { filter, items } = this.state;
    switch(filter) {
      case 'All':
        return items;
      case 'Active':
        return items.filter( i => !i.complete );
      case 'Completed':
        return items.filter( i => i.complete );
    }
  }

  addTodoItem = (name) => {
    let { items, id } = this.state;
    let nextId = id + 1;
    let item = { name, id: nextId, complete: false }
    this.setState({ items: [...items, item], id: nextId })
  }

  onTodoClick = (id) => {
    let items = this.state.items.map( item => {
      if (item.id === id) 
        return { ...item, complete: !item.complete }
      return item
    });

    this.setState({ items })

  }

  render() {
    let { filter } = this.state;
    return (
      <div>
        <TodoForm addTodoItem={this.addTodoItem} />
        <List 
          onTodoClick={this.onTodoClick} 
          items={this.filteredItems()} 
        />
        <Filter setFilter={this.setFilter} currentFilter={filter} />
      </div>
    )
  }
}

export default TodoApp;
