import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';


class App extends Component {
  constructor(props){
  	super(props);

  	this.state = {
      currentUser: {name: ""}, // optional. if currentUser is not defined, it means the user is Anonymous
  	  messages: [],
      active : 0 
  	};
  } 

componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
    console.log('Connected to server');
     this.socket.onmessage = (event ) =>{
      var data = JSON.parse(event.data);
      console.log(data);
      if (data.type === 'activeUser'){
        this.setState({active: data.value})
        console.log(this.state.active)
      }
      else {
     let newList = this.state.messages.concat(JSON.parse(event.data));
      console.log(newList);
      this.setState({messages:newList})
     }


     this.socket.onopen = function (event) {
     console.log('Opened web socket connection');
    }
  }  
}     



handleMessageChange = (type, props) =>{
	// const user = this.state.messages.username;
	const New = { ...props, type}; 

	//const message = this.state.messages.concat(New)
	// this.setState({messages:message}) 
  console.log('testing',(New));
  this.socket.send(JSON.stringify(New));

};

handleUserChange = (type,evt) =>{
  const newUser = {name : evt,};  
  // const message = this.state.messages.concat(newUser)
  this.setState({currentUser : newUser});
  console.log(this.state.messages);
};

  

  render() {
    const activeUsers =  this.state.active;
  	console.log("Rendering <App/>");
    return (
      <div>
        <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
    <span className = 'activeUser'> Active Users {activeUsers} </span> 
    </nav>

  		
      <MessageList messages={this.state.messages} user={this.state.messages}/>   
      <ChatBar userChanged={this.handleUserChange} messageChanged={this.handleMessageChange}/>
    </div>	

    );
  }
}



export default App;
