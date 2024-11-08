import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    Jobs: [
      { id: "abc1", title: "Dev1", salary: "500$" },
      { id: "abc2", title: "Dev2", salary: "600$" },
      { id: "abc3", title: "Dev3", salary: "700$" },
    ],
  };

  addNewJob = (job) => {
    console.log("check job", job);
    this.setState({
      Jobs: [...this.state.Jobs, job],
    });
  };

  deleteAjob = (job) => {
    let currentsJobs = this.state.Jobs;
    currentsJobs = currentsJobs.filter((item) => item.id !== job.id);
    this.setState({
      Jobs: currentsJobs,
    });
  };

  componentDidUpdate(prevProps, preveState) {
    console.log(
      "run didupdate :",
      "prev state",
      preveState,
      "current state",
      this.state
    );
  }

  componentDidMount() {
    console.log("run componentDidMount");
  }

  render() {
    console.log("check state:", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent Jobs={this.state.Jobs} deleteAjob={this.deleteAjob} />
      </>
    );
  }
}

export default MyComponent;
