import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editTodoInput: "",
      copyItem: props.item,

    };
  }
  escFunction(event){
    if(event.keyCode === 27) {
      //Do whatever when esc is pressed
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state.editTodoInput);
    this.props.deleteTodo(this.props.item.id)
    this.props.onSubmit({
      id: this.state.copyItem.id,
      text: this.state.editTodoInput,
      complete: this.state.copyItem.complete,
      favorite: this.state.copyItem.favorite,
      editing: this.state.copyItem.editing,
    });
    this.props.editTodo()
  }

  handleOnChange(event) {
    this.setState({
      editTodoInput: event.target.value,
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
          <label htmlFor="edit"></label>
          <Input
            autoFocus
            id="edit"
            name="editTodoInput"
            placeholder="Edit Todo:"
            value={this.state.editTodoInput}
            onChange={(event) => this.handleOnChange(event)}
            inputProps={{ "aria-label": "description" }}
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

export default EditTodo;
