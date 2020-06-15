import React, { Component } from 'react';
import Registrer from './containers/Registrer/Registrer';
import ChatRoom from './containers/ChatRoom/ChatRoom';

class App extends Component {
  state = {
    color: '',
    newUserName: {
      errorMsg: '',
      validation: false,
      userName: ''
    },
    showPage: 0
  }

  componentDidMount() {
    this.generateDarkColor();
  }

  generateDarkColor = () => {
    const h = Math.floor(Math.random() * 360),
    s = Math.floor(Math.random() * 100) + '%',
    l = Math.floor(Math.random() * 60) + '%'
    this.setState({ color: `hsl(${h},${s},${l})` });
  }

  showChat = () => {
    this.setState({ showPage: 1 })
  }

  checkUserName = (e) => {
    let errorMsg = '', validation = false;
    let userName = e.target.value;
    
    if (!userName.match(/[a-z]/)) {
      errorMsg = 'Username Must Have at Least One Lower Case Letter';
    } else if (!userName.match(/[A-Z]/)) {
      errorMsg = 'Username Must Have at Least One Upper Case Letter';
    } else if (!(userName.length >= 6 && userName.length <= 10)) {
      errorMsg = 'Length Needs to be Between 6-10 characters';
    } else if (!userName.match(/[0-9]/)) {
      errorMsg = "Username Must Have at Least One Digit"
    } else if (userName.match(/[^A-Za-z0-9]/)) {
      errorMsg = "Only English Letters and digits are allowed"
    } else {
      validation = true;
    }
    this.setState({newUserName: {errorMsg, validation, userName}});
  }

  render() {
    const { showPage, color, newUserName } = this.state;

    return (
      <div className="App" style={{ backgroundColor: color }}>
        {showPage === 0 ?
          <Registrer  checkUserName={this.checkUserName} 
                      showChat={this.showChat} 
                      userName={newUserName.userName} 
                      errorMsg={newUserName.errorMsg} 
                      validation={newUserName.validation} /> 
        :
          <ChatRoom userName={newUserName.userName} color={color} />
        }
      </div>
    )
  }
}

export default App
