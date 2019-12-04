import React, {Component, Fragment} from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'ミーティング資料作成',
        completed: false
      },
      {
        id: 2,
        title: 'Redmineチケット登録',
        completed: false
      },{
        id: 3,
        title: 'コーディングチェック',
        completed: false
      }
    ]
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(t => {
        if(t.id === id) {
          t.completed = !t.completed
        }
        return t
      })
    })
  }
  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }
  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render () {
    return (
      <Fragment>
        <Header />
        <div className="App" style={{width: '600px', margin: 'auto'}}>
          <AddTodo addTodo={this.addTodo}/>
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo} 
          />
        </div>
      </Fragment>
    )
  }
}

export default App
