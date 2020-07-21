import React from "react";
import "./App.css";
import "./components/style.css";
import "./components/ListOfTodos/style.css";
import Header from "./components/Header.jsx";
import AddTodo from "./components/AddTodo.jsx";
import ListOfTodo from "./components/ListOfTodos/ListOfTodos";
import ListOfDoneTodos from "./components/ListOfDoneTodos.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      needTodo: [],
      doneTodo: [],
    };
  }

  needTodo() {
    this.setState((state) => {
      return {
        needTodo: state.items.filter(function (item) {
          return item.complete === false;
        }),
      };
    });
  }

  doneTodo() {
    this.setState((state) => {
      return {
        doneTodo: state.items.filter(function (item) {
          return item.complete === true;
        }),
      };
    });
  }

  addTodo(todo) {
    this.setState((state) => {
      return {
        items: [todo, ...state.items],
      };
    });
    this.needTodo();
    this.doneTodo();
  }

  onComplite(id) {
    this.setState((state) => {
      return {
        items: state.items.map((item) => {
          if (item.id == id) {
            return {
              id: item.id,
              text: item.text,
              complete: !item.complete,
            };
          } else {
            return item;
          }
        }),
      };
    });
    this.needTodo();
    this.doneTodo();
  }
  deleteTodo(id){
    this.setState((state) => {
      return {
        items: state.items.filter(item => item.id !== id)
      };
    });
    this.needTodo();
    this.doneTodo();
  }

  render() {
    return (
      <div className="App">
        <Header />    
        <AddTodo onSubmit={(todo) => this.addTodo(todo)} />
        <div className= "border" style= {{margin:"25px"}}>Todos for today {this.state.needTodo.length}
        <ul>
          {this.state.needTodo.map((item) => (
            <ListOfTodo
              key={item.id}
              item={item}
              deleteTodo = {()=> this.deleteTodo(item.id)}
              onComplite={() => this.onComplite(item.id)}
            />
          ))}
        </ul>
        </div>
          <div className = "border" style= {{margin:"25px"}}>Done Todos {this.state.doneTodo.length}
        <ul>
          {this.state.doneTodo.map((item) => (
            <ListOfDoneTodos
              key={item.id}
              item={item}
              deleteTodo = {()=> this.deleteTodo(item.id)}
              onComplite={() => this.onComplite(item.id)}
            />
          ))}
        </ul>
        </div>
      </div>
    );
  }
}
export default App;
