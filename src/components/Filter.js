import React from 'react';

const styles = {
  notActive: {
    textDecoration: 'underline',
    color: 'blue',
    cursor: 'pointer',
  }
}

const filterLink = (text, current, cb) => {
  if (text === current)
    return (<span>{text}</span>)
  return (
    <span
      onClick={() => cb(text)}
      style={styles.notActive}
    >
      {text}
    </span>
  )
}

const Filter = ({ currentFilter, setFilter }) => (
  <div>
    {filterLink('All', currentFilter, setFilter)}
    {' '}
    {filterLink('Active', currentFilter, setFilter)}
    {' '}
    {filterLink('Completed', currentFilter, setFilter)}
  </div>
)

export default Filter;
