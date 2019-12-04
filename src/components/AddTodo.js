import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component {
  state = {
    inputTitle: ""
  }
  textChange = (e) => {
    this.setState({
      inputTitle: e.target.value
    })
  }
  onSubmit = (e) => {
    this.props.addTodo(this.state.inputTitle)
    this.setState({
      inputTitle: ""
    })
  }

  render() {
    return (
      <form style={{display: 'flex'}}>
        <input
          onChange={this.textChange}
          type="text"
          name="title"
          placeholder="Add todo..."
          value={this.state.inputTitle}
          style={{
            flex: '10',
            padding: '5px'
          }}
        />
        <span
          onClick={this.onSubmit.bind(this)}
          style={{
            flex: '1',
            padding: '5px',
            borderRadius: '3px',
            cursor: 'pointer',
            marginLeft: '5px',
            border: '1px solid #ccc'
          }} >
          Submit
        </span>
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func
}