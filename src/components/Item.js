import React from 'react';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey',
  }
}

const Item = ({ name, id, complete, onTodoClick }) => (
  <li 
    style={ complete ? styles.complete : {} }
    onClick={() => onTodoClick(id)}
  >
    {name}
  </li>
)

export default Item;
