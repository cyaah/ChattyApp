import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';


class App extends Component {
  constructor(props){
  	super(props);

  	this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  	  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
  	};
  } 

componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
    console.log('Connected to server');
     this.socket.onopen = function (event) {
     console.log('Opened web socket connection');
    }
}   



handleMessageChange = evt => {
	const user = this.state.currentUser.name
	const New = { username : user, content : evt}
	const message = this.state.messages.concat(New)
	// this.setState({messages:message}) 
  this.socket.send(JSON.stringify(New));













                    };

  

  render() {
  	console.log("Rendering <App/>");
    return (
  	<div>	
      <MessageList messages={this.state.messages}/>   
      <ChatBar user={this.state.currentUser} messageChanged={this.handleMessageChange}/>
    </div>	

    );
  }
}



export default App;
