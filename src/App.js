import React, { Component } from 'react';
import List from './List';
// import './App.css'

class App extends Component {
  static defaultProps ={
    store: {
      users: [],
      chatEvents: [],
    }
  };

  render() {
    const { store } = this.props
    return (
    <main className='App'>
      <div className='App-list'>
        {store.users.map(list => (
          <List
            key={list.id}
            users={list.user}
            />
        ))}

      </div>
    </main>
    );
  }
}

export default App;