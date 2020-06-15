import React, { Component } from 'react';

class Chat extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth", block: 'start', inline: "nearest" });
  }

  render() {
    return (
      <div className="Chat box">
        {this.props.msgs.map((msg, index) => {
          const className = (msg.username === this.props.username) ? 'ChatMsg UserMsg' : 'ChatMsg';
          return (
            <div key={index} className={className} style={{ backgroundColor: msg.color }}>
              <div className="MsgHeader">
                <span className="MsgDate">[{msg.date}]</span>
                <span className="MsgUser">{msg.username}</span>
              </div>
              <span className="MsgContent">{msg.content}</span>
            </div>
          )
        })}
        <div style={{ float: "left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}> </div>
      </div>
    )
  }
};

export default Chat;