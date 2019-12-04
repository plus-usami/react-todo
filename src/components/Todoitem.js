import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todoitem extends Component {
  getStyle = () => {
    return {
      background: 'f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc solid',
      textDecoration: this.props.todoSingle.completed ? 'line-through' : 'none'
    }
  }
  render() {
    const {id, title} = this.props.todoSingle
    return (
      <div style={this.getStyle()}>
        <p style={{marginBottom: '0', lineHeight: '2.0'}}>
        <input
          type="checkbox" 
          onChange={this.props.markComplete.bind(this, id)}
        />
        {" "}
        {title}
        <button
          onClick={this.props.delTodo.bind(this, id)}
          type="button"
          style={btnStyle}
        >Delete
        </button>
        </p>
      </div>
    )
  }
}

Todoitem.propTypes = {
  todoSingle: PropTypes.object,
  markComplete: PropTypes.func,
  delTodo: PropTypes.func
}
const btnStyle = {
  float: 'right',
  padding: '5px',
  background: '#007bff',
  color: '#fff',
  borderRadius: '3px',
  cursor: 'pointer',
}