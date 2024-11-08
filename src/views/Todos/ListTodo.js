import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss"; // Đảm bảo rằng bạn đã import đúng
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    ListTodos: [
      { id: "todo1", title: "Dev" },
      { id: "todo2", title: "Doctor" },
    ],
    editTodo: {},
  };

  // Hàm addNewTodo để thêm công việc mới
  addNewTodo = (todo) => {
    // Log kiểm tra xem hàm này có được gọi không
    console.log("New todo: ", todo);

    this.setState({
      ListTodos: [...this.state.ListTodos, todo],
    });

    toast.success("More success !");
  };

  deleteTodo = (todo) => {

    let currentsTodo = this.state.ListTodos;
    currentsTodo = currentsTodo.filter((item) => item.id !== todo.id);

    this.setState({
      ListTodos: currentsTodo,
    });

    toast.success("delete successfully !");
  };

  handleDeleteTodo = (todo) => {
    this.props.deleteTodo(todo);
  };

  handleEditTodo = (todo) => {
    let { editTodo, ListTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodoCopy = [...ListTodos];

      let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));

      listTodoCopy[objIndex].title = editTodo.title;

      this.setState({
        ListTodos: listTodoCopy,
        editTodo: {}
      })

      toast.success("Update Todo successfully !");

      return;
    }

    this.setState({
      editTodo: todo,
    });

  };

  handleOnChangeEditTodo = (event) => {

    let EditTodoCopy = { ...this.state.editTodo };
    EditTodoCopy.title = event.target.value;

    this.setState({
      editTodo: EditTodoCopy,
    });
  };

  render() {

    let { ListTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log("check emptyObj", isEmptyObj);

    return (
      <>
        <div className="list-todo-container">
          {/* Truyền hàm addNewTodo xuống AddTodo dưới dạng prop */}
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {ListTodos &&
              ListTodos.length > 0 &&
              ListTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} - {" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnChangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.deleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
