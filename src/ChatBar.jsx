import React, {Component} from 'react';

class ChatBar extends Component {
	constructor(props) {
		super(props);

	  this.state = {
      username: '',
      messages: ''
    };	
	}

	submitMessage () {
		const content = this.state.messages 
		this.props.messageChanged(content);
		this.setState({messages:''}) 

	}

	submitUser(){
		const user = this.state.username;
		
		this.props.userChanged(user);
		this.setState({username: ''})
	}

	render() {
		  	console.log("Rendering <App/>");
		return (
		<div>
		<footer className="chatbar">
		  <input className="chatbar-username"
		   placeholder="Your Name (Optional)" 
		   value = {this.state.username} 
		   onChange = {evt =>{
		   	this.setState({username : evt.target.value})

		   }}
		   onKeyPress={evt =>{
		   	if (evt.key === 'Enter'){
		   		this.submitUser()
		   	}
		   }}
		   	/>
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
          	}
          }}/>


		</footer>
		</div>	
		);
	}
}

export default ChatBar;