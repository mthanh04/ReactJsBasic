import React from "react";
import "./ListTodo.scss";
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Kiểm tra xem input có trống không
    if (!this.state.title) {
        toast.error("error title!");
      return;
    }

    // Log kiểm tra xem prop addNewTodo có tồn tại không
    console.log("AddTodo props: ", this.props.addNewTodo);

    // Gọi hàm addNewTodo từ props để thêm công việc mới
    this.props.addNewTodo({
      id: Math.floor(Math.random() * 1000), // Tạo ID ngẫu nhiên
      title: this.state.title,
    });

    // Reset lại input sau khi thêm
    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <>
        <div className="add-todo">
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleOnChange(event)}
          />
          <button
            className="add"
            onClick={(event) => this.handleSubmit(event)} // Gọi hàm handleSubmit khi bấm nút
          >
            Add
          </button>
        </div>
      </>
    );
  }
}

export default AddTodo;
