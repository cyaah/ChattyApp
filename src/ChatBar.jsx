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
		const user = this.state.username
		this.props.messageChanged('msgChange',{content, user});
		console.log('test',this.state.messages);
		this.setState({messages:''}) 

	}

	submitUser(evt){
		const oldUser = this.state.username;
		this.setState({username : evt.target.value}, () =>{
		const user=this.state.username;
		//console.log(oldUser, user);
		this.props.messageChanged('userChange',{oldUser,user});
		})
		
		//this.setState({username: ''})
	}

	render() {
		  	console.log("Rendering <App/>");
		return (
		<div>
		<footer className="chatbar">
		  <input className="chatbar-username"
		   placeholder="Your Name (Optional)" 
		   defaultValue = {this.state.username} 
		   // onChange = {evt =>{

		   // }}
		   onKeyPress={evt =>{
		   	if (evt.key === 'Enter'){
		   		this.submitUser(evt)
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