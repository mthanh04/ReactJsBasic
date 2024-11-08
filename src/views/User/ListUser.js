import axios from "axios";
import React from "react";
import "./ListUser.scss";

class ListUser extends React.Component {
  state = {
    listUser: [],
  };

  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
    console.log("check res: ", res);
  }

  render() {
    let { listUser } = this.state;
    return (
      <div className="list-user-container">
        {listUser &&
          listUser.length > 0 &&
          listUser.map((item, index) => {
            return (
              <div className="child-user" key={item.id}>
                {index + 1} - {item.first_name} {item.last_name} 
              </div>
            );
          })}
      </div> 
    );
  }
}

export default ListUser;
