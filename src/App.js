import React from "react";
import "./App.css";
import "./components/style.css";
import Header from "./components/Header.jsx";
import AddTodo from "./components/AddTodo.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <AddTodo/>
      </div>
    );
  }
}
export default App;
