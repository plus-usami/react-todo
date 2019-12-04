import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Todoitem from './Todoitem'

class Todos extends Component {
  render() {
    const {markComplete, delTodo} = this.props
    return this.props.todos.map(todoSingle => (
      <Todoitem
        key={todoSingle.id}
        todoSingle={todoSingle}
        markComplete={markComplete}
        delTodo={delTodo}
      />
    ))
  }
}
Todos.propTypes = {
  todos: PropTypes.array,
  markComplete: PropTypes.func,
  delTodo: PropTypes.func
}

export default Todos