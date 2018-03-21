import React, {Component} from 'react';

class ChatBar extends Component {
	constructor(props) {
		super(props);

	  this.state = {
      username: this.props.user.name,
      messages: ''
    };	
	}

	submitMessage () {
		const content = this.state.messages 
		this.props.messageChanged(content);
		this.setState({messages:''}) 

	}

	render() {
		  	console.log("Rendering <App/>");
		return (
		<div>
		<footer className="chatbar">
		  <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue = {this.props.user.name} />
  		  <input 
  		  className="chatbar-message" 
  		  placeholder="Type a message and hit ENTER"  
  		  value={ this.state.messages }
          onChange={ evt => {
            this.setState({ messages: evt.target.value })
          }}  
          onKeyPress={evt=> { 
          	if (evt.key === 'Enter'){
          		this.submitMessage()
		this.value ='';
          	}
          	evt
          }}/>


		</footer>
		</div>	
		);
	}
}

export default ChatBar;