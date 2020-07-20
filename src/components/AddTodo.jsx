import React from "react";
import shortid from "shortid";
class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: ""
    };
  }
  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value)
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submited')
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.todoInput,
      complete: false,
    });
    //clear input after submit
    event.target.reset()
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
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
