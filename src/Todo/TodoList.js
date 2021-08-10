import React, {Component} from 'react';
class TodoList  extends Component {

    constructor () {
        super();
        this.state = {
userInput: '',
items: []
};
        
}
    onChange(event) {
        
        this.setState({
userInput: event.target.value

        });
    }

    addTodo(event) {
event.preventDefault();//renouveler la Page
this.setState({
    userInput: '',
    
    items: [...this.state.items,this.state.userInput]
    
});

}
deleteTodo(event){
event.preventDefault();
const array = this.state.items;
const index = array.indexOf(event.target.value);
array.splice(index,1);
this.setState({items:array},() => console.log(index,1));

}


rendertodo() {
    
return this.state.items.map((item) =>{
return(
<div key={item}>
{item} | <button onClick={this.deleteTodo.bind(this)}>X</button>
</div>
);
}

);

}
	render() {
		
		return(
		<div>
		
		<h1>Challenge TodoList</h1>
		<form>
            <input 
            value={this.state.userInput} 
            type="text" 
            placeholder="Renseigner Un Item" 
            onChange={this.onChange.bind(this)}
            />
            <button onClick={this.addTodo.bind(this)}>Ajouter</button>
           
        </form>
        <div>
            {this.rendertodo()}
        </div>
		</div>
		
		);
	}
}
export default TodoList