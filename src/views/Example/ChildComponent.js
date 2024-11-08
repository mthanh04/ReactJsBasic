import React from "react";

class ChildComponent extends React.Component {
  // state = {
  //   firstName: "",
  //   lastName: "",
  // };

  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  // handleFirstName = (event) => {
  //   this.setState({
  //     firstName: event.target.value,
  //   });
  // };

  // handleLastName = (event) => {
  //   this.setState({
  //     lastName: event.target.value,
  //   });
  // };

  // handleClick = (event) => {
  //   event.preventDefault();
  //   console.log("check value: ", this.state.firstName + this.state.lastName);
  //   console.log("check: ", this.state);
  // };

 


  handleOneClickDelete = (job) => {
    console.log("handle deleteAjob:", job);
    this.props.deleteAjob(job);
  };

  

  render() {
    let check =
      this.state.showJobs === true ? ( "showJobs - true" ) : ( "hideJobs - false" );
    console.log("check props:", this.props);
    let { Jobs } = this.props;
    let { showJobs } = this.state;
    console.log("check showJobs", check);

    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="jos-list">
              {Jobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <> </>{" "}
                    <span>
                      <button className="btn-delete" onClick={() => this.handleOneClickDelete(item)}>
                        Xóa
                      </button>
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default ChildComponent;
