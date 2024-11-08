import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Nav/Nav";
import Nav from "./Nav/Nav";
import "./Example/Home";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Example/Home";
import ListUser from "./User/ListUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
          </Switch>

          <Switch>
          <Route path="/user" exact>
          
          <ListUser/>
          </Route>
          </Switch>

          {/* <MyComponent/> */}

          {/* <ListTodo /> */}
        </header>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
