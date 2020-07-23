import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editTodoInput: "",
    };
  }

  sendBackData(){
    this.props.parentMainCallback(this.state.editTodoInput);
  };

  escFunction(event) {
    if (event.keyCode === 27) {
      this.props.editTodo()
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.editTodo();
  }

  handleOnChange(event) {
    this.setState({
      editTodoInput: event.target.value,
    });
  }

  render() {
    return (
      <form
        onKeyDown = {(event) => this.escFunction(event)}
        className="form"
        onSubmit={(event) => this.handleOnSubmit(event)}
        style={{ margin: "20px" }}
      >
        <div>
          <label htmlFor="edit"></label>
          <Input
            autoFocus
            id="edit"
            name="editTodoInput"
            placeholder= {this.props.item.text}
            value={this.state.editTodoInput}
            onChange={(event) => this.handleOnChange(event)}
            inputProps={{ "aria-label": "description" }}
          />
        </div>
        <Button
          onClick={() => this.sendBackData()}
          placeholder="+"
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px" }}
        >
          <Typography><i className="fas fa-check"></i></Typography>
        </Button>
      </form>
    );
  }
}

export default EditTodo;
