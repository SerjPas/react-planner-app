import React from "react";
import "./App.css";
import "./components/style.css";
import Header from "./components/Header.jsx";
import AddTodo from "./components/AddTodo.jsx";
import ListOfTodo from "./components/ListOfTodos.jsx";
import ListOfDoneTodos from "./components/ListOfDoneTodos.jsx";
import Typography from "@material-ui/core/Typography";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Reset from "./components/Reset";
import Divider from '@material-ui/core/Divider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      editedText: "",
    };
  }

  handleReset() {
    this.setState({
      items: [],
    })
  }

  handleNewTodo(todo) {
    this.setState((state) => {
      return {
        items: [todo, ...state.items],
      };
    });
  }

  onComplite(id) {
    this.setState((state) => {
      return {
        items: state.items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              complete: !item.complete,
            };
          } else {
            return item;
          }
        }),
      };
    });
  }

  handleDeleteTodo(id) {
    this.setState((state) => {
      return {
        items: state.items.filter((item) => item.id !== id),
      };
    });
  }

  addToFavorite(id) {
    this.setState((state) => {
      return {
        items: state.items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              favorite: !item.favorite,
            };
          } else {
            return item;
          }
        }),
      };
    });
  }

  editTodo(id) {
    this.setState((state) => {
      return {
        items: state.items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              editing: !item.editing,
              text: state.editedText || item.text,
            };
          } else {
            return item;
          }
        }),
      };
    });
  }

  callbackMainFunction(childData) {
    this.setState({
      editedText: childData
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo onSubmit={(todo) => this.handleNewTodo(todo)} />
        {this.state.items.length > 0 ? (<Reset handleReset={(todo) => this.handleReset(todo)}></Reset>) : ("")}
        <div className="border" style={{ margin: "25px" }}>
          {this.state.items.length > 0 ? (<Typography> Todos for today: {this.state.items.filter((item) => !item.complete).length}</Typography>) : ""}
          <ul> {
            this.state.items.filter((item) => !item.complete && item.favorite)
              .map((item) => (
                <ListOfTodo
                  parentMainCallback={(childData) => this.callbackMainFunction(childData)}
                  onSubmit={(todo) => this.handleNewTodo(todo)}
                  key={item.id}
                  item={item}
                  editTodo={() => this.editTodo(item.id)}
                  addToFavorite={() => this.addToFavorite(item.id)}
                  handleDeleteTodo={() => this.handleDeleteTodo(item.id)}
                  onComplite={() => this.onComplite(item.id)}>
                </ListOfTodo>
              ))
          } {
              this.state.items.filter((item) => !item.complete && !item.favorite)
                .map((item) => (
                  <ListOfTodo
                    parentMainCallback={(childData) => this.callbackMainFunction(childData)}
                    onSubmit={(todo) => this.handleNewTodo(todo)}
                    key={item.id}
                    item={item}
                    editTodo={() => this.editTodo(item.id)}
                    addToFavorite={() => this.addToFavorite(item.id)}
                    handleDeleteTodo={() => this.handleDeleteTodo(item.id)}
                    onComplite={() => this.onComplite(item.id)}>
                  </ListOfTodo>
                ))
            }
          </ul>
        </div>
        <div className="border" style={{ margin: "25px" }}>
          {this.state.items.filter(item => item.complete).length > 0 ? (<Divider/>) : ""}
          {this.state.items.length > 0 ? (<Typography> Done Todos: {this.state.items.filter((item) => item.complete).length} </Typography>) : ""}
          <ul>
            {
              this.state.items.filter((item) => item.complete && item.favorite)
                .map((item) => (
                  <ListOfDoneTodos
                    parentMainCallback={(childData) => this.callbackMainFunction(childData)}
                    onSubmit={(todo) => this.handleNewTodo(todo)}
                    key={item.id}
                    item={item}
                    editTodo={() => this.editTodo(item.id)}
                    addToFavorite={() => this.addToFavorite(item.id)}
                    handleDeleteTodo={() => this.handleDeleteTodo(item.id)}
                    onComplite={() => this.onComplite(item.id)}>
                  </ListOfDoneTodos>
                ))
            }
            {
              this.state.items
                .filter((item) => item.complete && !item.favorite)
                .map((item) => (
                  <ListOfDoneTodos
                    parentMainCallback={(childData) => this.callbackMainFunction(childData)}
                    onSubmit={(todo) => this.handleNewTodo(todo)}
                    key={item.id}
                    item={item}
                    editTodo={() => this.editTodo(item.id)}
                    addToFavorite={() => this.addToFavorite(item.id)}
                    handleDeleteTodo={() => this.handleDeleteTodo(item.id)}
                    onComplite={() => this.onComplite(item.id)}>
                  </ListOfDoneTodos>
                )
                )
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default App;