import React from "react";
import "./App.css";
import "./components/style.css";
import "./components/ListOfTodos/style.css";
import Header from "./components/Header.jsx";
import AddTodo from "./components/AddTodo.jsx";
import ListOfTodo from "./components/ListOfTodos/ListOfTodos";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  addTodo =(todo)=>{
    //copy items to new arry and add new todo to beginning of the list
    this.setState({
      items:[todo, ...this.state.items]
    })
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <AddTodo onSubmit = {this.addTodo}/>
        <ul>
        {this.state.items.map(item =>(
          <ListOfTodo key = {item.id} text = {item.text}/>
        ))}
        </ul>
      </div>
    );
  }
}
export default App;
