import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: "",
    };
  }

  handleOnChange(event) {
    if (event.target.value !== "") {
      this.setState({
        todoInput: event.target.value,
      });
    }
  }
  handleOnSubmit(event) {
    event.preventDefault();
    if (this.state.todoInput !== "") {
      this.props.onSubmit({
        id: Date.now(),
        text: this.state.todoInput,
        complete: false,
        favorite: false,
        editing: false,
      });
    }
    //clear input after submit
    this.setState({
      todoInput: "",
    });
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={(event) => this.handleOnSubmit(event)}
        style={{ margin: "20px" }}
      >
        <div>
          <label htmlFor="todo"></label>
          <Input
            autoFocus
            id="todo"
            name="todoInput"
            placeholder="My Todo:"
            value={this.state.todoInput}
            onChange={(event) => this.handleOnChange(event)}
            inputProps={{ "aria-label": "description" }}
            required
          />
        </div>
        <Button
          placeholder="+"
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px" }}
        >
          <Typography>+</Typography>
        </Button>
      </form>
    );
  }
}

export default AddToDo;
