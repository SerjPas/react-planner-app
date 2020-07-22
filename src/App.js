import React from "react";
import "./App.css";
import "./components/style.css";
import "./components/ListOfTodos/style.css";
import Header from "./components/Header.jsx";
import AddTodo from "./components/AddTodo.jsx";
import ListOfTodo from "./components/ListOfTodos/ListOfTodos";
import ListOfDoneTodos from "./components/ListOfDoneTodos.jsx";
import Typography from "@material-ui/core/Typography";
import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  addTodo(todo) {
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
              id: item.id,
              text: item.text,
              complete: !item.complete,
              favorite: item.favorite,
            };
          } else {
            return item;
          }
        }),
      };
    });
  }

  deleteTodo(id) {
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
              id: item.id,
              text: item.text,
              complete: item.complete,
              favorite: !item.favorite,
            };
          } else {
            return item;
          }
        }),
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo onSubmit={(todo) => this.addTodo(todo)} />
        <div className="border" style={{ margin: "25px" }}>
          <Typography>Todos for today</Typography> {this.state.items.filter((item) => !item.complete).length}
          <ul>
            {this.state.items
              .filter((item) => !item.complete && item.favorite)
              .map((item) => (
                <ListOfTodo
                  key={item.id}
                  item={item}
                  addToFavorite={() => this.addToFavorite(item.id)}
                  deleteTodo={() => this.deleteTodo(item.id)}
                  onComplite={() => this.onComplite(item.id)}
                ></ListOfTodo>
              ))}
            {this.state.items
              .filter((item) => !item.complete && !item.favorite)
              .map((item) => (
                <ListOfTodo
                  key={item.id}
                  item={item}
                  addToFavorite={() => this.addToFavorite(item.id)}
                  deleteTodo={() => this.deleteTodo(item.id)}
                  onComplite={() => this.onComplite(item.id)}
                ></ListOfTodo>
              ))}
          </ul>
        </div>
        <div className="border" style={{ margin: "25px" }}>
        <Typography>Done Todos</Typography>  {this.state.items.filter((item) => item.complete).length}
          <ul>
            {this.state.items
              .filter((item) => item.complete && item.favorite)
              .map((item) => (
                <ListOfDoneTodos
                  key={item.id}
                  item={item}
                  addToFavorite={() => this.addToFavorite(item.id)}
                  deleteTodo={() => this.deleteTodo(item.id)}
                  onComplite={() => this.onComplite(item.id)}
                />
              ))}
            {this.state.items
              .filter((item) => item.complete && !item.favorite)
              .map((item) => (
                <ListOfDoneTodos
                  key={item.id}
                  item={item}
                  addToFavorite={() => this.addToFavorite(item.id)}
                  deleteTodo={() => this.deleteTodo(item.id)}
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
