import React, { Component } from 'react';
import Chat from './components/Chat';
import NewMessage from './components/NewMessage';

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
);

const wsUrl = isLocalhost ? 'ws://localhost:3001' : 'ws://git_chat_room.gititregev.info:3001';

class ChatRoom extends Component {
    state = {
        msgsArray: [],
        newMsg: {
            validation: false,
            length: 0,
            errorMsg: '',
            content: ''
        }
    }

    ws = new WebSocket(wsUrl);
    
    componentDidMount() {
        this.ws.onmessage = e => {
            const message = JSON.parse(e.data)
            this.addNewMessageToArray(message)
        }

        this.ws.onclose = () => {
            this.setState({
                ws: new WebSocket(wsUrl),
            })
        }
    }

    checkMessage = (e) => {
        let content = e.target.value, validation = false, length = 0, errorMsg = '';

        if (content.match(/[0-9]/)) {
            errorMsg = 'Numbers are Not Allowed';
        } else if (content.match(/[^A-Za-z-!$%^#@&*()_+|~=`{}[\]:";'<>?,./\\ +]/)) {
            errorMsg = 'Messages can Contain Only English and Symbols';
        } else if (!(content.length >= 5 && content.length <= 120)) {
            errorMsg = 'Length should be between 5-120 characters';
        } else {
            validation = true;
        }
        length = content.length;
        this.setState({ newMsg: { validation, length, errorMsg, content } });
    }

    sendMsgToServer = (e) => {
        const { userName, color } = this.props;
        const msg = { username: userName, color: color, content: this.state.newMsg.content, date: new Date().toLocaleString() }
        this.ws.send(JSON.stringify(msg))
        this.setState({ newMsg: { validation: false, length: 0, errorMsg: '', content: '' } });
    }

    addNewMessageToArray = (msg) => {
        this.setState({ msgsArray: [...this.state.msgsArray, msg] });
    }

    render() {
        const { newMsg, msgsArray } = this.state;
        return (
            <div className="ChatRoom">
                <Chat msgs={msgsArray} username={this.props.userName}/>
                <NewMessage checkMessage={this.checkMessage}
                    sendMsgToServer={this.sendMsgToServer}
                    validation={newMsg.validation}
                    errorMsg={newMsg.errorMsg}
                    length={newMsg.length}
                    content={newMsg.content} />
            </div>
        )
    }
}

export default ChatRoom
