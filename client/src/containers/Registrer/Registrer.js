import React from 'react';

const Registrer = (props) => (
    <div className="Registrer">
        <div className="Bubble box">Welcome to Git's Chat Room</div>
        <div className="RegistrerBox box">
            <input  type="text" 
                    id="username" 
                    name="username" 
                    placeholder="Enter Your Username"
                    value={props.userName}
                    onKeyDown= {(e) => e.keyCode === 13 && props.validation && props.showChat()}
                    onChange={(e) => props.checkUserName(e)} />
            <div className={props.validation ? 'Btn' : 'Disabled Btn'} onClick={() => props.showChat()}>Enter to The Room</div>
            <span>{!props.validation && props.errorMsg}</span>
        </div>
    </div>
);

export default Registrer;