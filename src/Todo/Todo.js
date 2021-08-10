import React, {Component} from 'react';
import shortid from 'shortid'
class Todo extends React.Component {
state = {

    text:""
};
handlechange = event => {

    this.setState ({
        [event.target.name] : event.target.value
    });
};
handleSubmit = event => {
    event.preventdefault();
    this.props.onSubmit({
        id:shortid.generate(),
        text: this.state.text,
        complete: false
    });
    this.setState ({
      text:""
    }); 
}
	render() {
		
		return(
		<div>
		
		
		<form onSubmit={this.handleSubmit}>
            <input 
            name="text" 
            value={this.state.text} 
            onChange={this.handlechange}
            placeholder="Renseigner Un Item" 
            
            />
          <button onClick={this.handleSubmit}> ADD</button>
           
        </form>
        
		</div>
		
		);
	}
}

export default Todo;