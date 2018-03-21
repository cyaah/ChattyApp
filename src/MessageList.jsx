import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
	render(){
		  	console.log("Rendering <App/>");
		return(
		  <main className="messages">
          {this.props.messages.map((message,i) => {
	        return <Message key = {i} className="message-content" content={message.content} username={message.username}/>
          } )}
  		  </main>
			);
	}
}

export default MessageList;