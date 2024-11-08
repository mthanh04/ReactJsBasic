import React from "react";
import './Demo.scss'

class AddComponent extends React.Component {

    state = {
        title: "",
        salary: ""
    }

    handleTitleJobs = (event) => {
        this.setState({
          title: event.target.value,
        });
      };
    
      handleSalary = (event) => {
        this.setState({
          salary: event.target.value,
        });
      };

      handleSubmit = (event) => {
       
        event.preventDefault();
        if(!this.state.title || !this.state.salary) {
            alert("loi cmmr")
            return;
        }
        console.log("check data ", this.state);
        this.props.addNewJob({
            id:Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title:'',
            salary:''
        })
      };


  render() {
    return (
        <>
      <form>
        <label htmlFor="fname">Title-Jobs:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleTitleJobs(event)}
        />
        <br />
        <label htmlFor="lname">salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleSalary(event)}
        />
        <br />
        <br />
        <input className="submit-input"
          type="submit"
          value="submit"
          onClick={(event) => this.handleSubmit(event)}
        />
      </form>
      </>
    );
  }
}

export default AddComponent;
