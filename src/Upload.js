import React, { Component } from "react";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lecturer: "",
      module: "",
      video: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleVideo = this.handleVideo.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleVideo(e) {
    const file = e.target.value;
    const video = e.target.files[0];
    this.setState(() => ({ video }));
    console.log(this.state);
    console.log(file);
  }

  render() {
    return (
      <div className="form__container">
        <form className="form">
          <h3>Lecturer</h3>
          <input
            type="text"
            placeholder="Lecturer"
            id="lecturer"
            onChange={this.handleChange}
          />

          <h3>Module</h3>
          <input
            type="text"
            placeholder="Module"
            id="module"
            onChange={this.handleChange}
          />

          <h3>Videor</h3>
          <input type="file" onChange={this.handleVideo} />
        </form>
      </div>
    );
  }
}

export default Upload;
