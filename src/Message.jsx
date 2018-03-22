import React, {Component} from 'react';

class Message extends Component {
	render () {
		const {user, content, type, oldUser}=this.props.msg; 
		console.log(user, content, type , oldUser); 
			if (type === 'msgChange'){
			return (
	  		  <div className="message">
	  		    <span className ="message-username">{user}</span>
		        <span className ="message-content">{content}</span>
	  	      </div>
	  	      );
	  	  	}
	  	      else if (type === 'userChange'){
	  	      	return (
	  	      <div className="message">
	  		    <span className ="message-username">{oldUser || 'anonymous'}</span>
		        <span className ="message-content"> has changed there name to</span>
		         <span className ="message-username">{user}</span>
	  	      </div>
		      );
	  	    } else {
	  	    	return <div>Foo</div>
	  	    }			
			  	  
	}
}

export default Message;