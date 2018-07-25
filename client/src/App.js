import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {users : []};

    componentDidMount(){
        fetch("/users")
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    addUser = (event) =>{
        const data = new FormData(event.target);

        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: data.get('username')
            }),
        });
    }

    render(){
      return (
          <div className="App">
            <h1>Users</h1>

            <form onSubmit={this.addUser}>
                <label>Username: </label><br/>
                <input type={'text'} name={'username'} id={'username'}/>
                <br/><br/>
                <button>Send data!</button>

            </form>

            <ul>
                {
                    this.state.users.map(user =>
                    <li key={user._id}>{user.username}</li>
                    )
                }
            </ul>
        </div>
      );
    }
}

export default App;
