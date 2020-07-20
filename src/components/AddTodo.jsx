import React from "react";
class AddToDo extends React.Component {
  state = {
    todoInput:""
  }
  handleOnChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
    
  }

  render() {
    return (
      <form className="form">
        <div>
          <label htmlFor="todo"></label>
          <input
            id="todo"
            name="todoInput"
            placeholder="My to do:"
            value={this.input}
            onChange={this.handleOnChange}
          />
        </div>
        <button type="submit">+</button>
      </form>
    );
  }
}
export default AddToDo;
