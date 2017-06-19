import React from 'react';
import Item from './Item';

const styles = {
  list: { listStyle: 'none', textAlign: 'center' },
  red: { color: 'red' }
}

class List extends React.Component {
  render() {
    let items = this.props.items.map( (item) => {
      return (<Item key={item.id} {...item} onTodoClick={this.props.onTodoClick} />)
    });

    return (
      <ul style={styles.list}>
        {items}
      </ul>
    )
  }
}

export default List;
