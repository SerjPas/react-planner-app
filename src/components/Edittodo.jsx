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
  handleOnSubmit(event){
    event.preventDefolt()
    console.log("click")
  }
  handleOnChange(){
    if (event.target.value !== "") {
      this.setState({
        editTodoInput: event.target.value,
      });
    }
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
            name="editTodoInput"
            placeholder="My Todo:"
            value={this.state.editTodoInput}
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

export default EditTodo;
