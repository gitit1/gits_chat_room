import React from 'react';

const NewMessage = (props) => (
  <div className="NewMessage box">
    <div className="NewMessageForm">
      <input type="text" 
             id="message" 
             name="message" 
             placeholder="Enter Your Message"
             onKeyDown= {(e) => e.keyCode === 13 && props.validation && props.sendMsgToServer()}
             value={props.content}
             onChange={(e) => props.checkMessage(e)} />
      <div className={props.validation ? 'Btn' : 'Disabled Btn'} onClick={() => props.sendMsgToServer()}><span>Send Message</span></div>
    </div>
  <span className="MsgWordsCounter">{props.length}/{120}</span>
    <span className="MsgError">{!props.validation && props.errorMsg}</span>
  </div>
);

export default NewMessage;