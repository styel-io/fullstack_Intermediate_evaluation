import React, { Component } from "react";
import axios from "axios";

import { setImageUrl } from "../actions/post";
import { connect } from "react-redux";

class NewPostUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      imageurl: null,
      text: null,
      location: null,
      styel: null
    };
  }

  handleChange = ev => {
    let file = this.uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = this.uploadInput.files[0].name.split(".");
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    // let randomNum = Math.floor(Math.random() * 11);
    let date = new Date();
    console.log("Preparing the upload");
    axios
      .post("/api/controllers/sign_s3", {
        fileName: date.getTime() + "_" + fileName,
        fileType: fileType
      })
      .then(response => {
        var returnData = response.data.data.returnData;
        var signedRequest = returnData.signedRequest;
        var url = returnData.url;
        this.setState({ imageurl: url });
        this.props.addPostStandby(this.state.imageurl);
        console.log("Recieved a signed request " + signedRequest);

        // Put the fileType in the headers for the upload
        var options = {
          headers: {
            "Content-Type": fileType
          }
        };
        axios
          .put(signedRequest, file, options)
          .then(result => {
            console.log("Response from s3");
            this.setState({ success: true });
          })
          .catch(error => {
            alert("ERROR " + JSON.stringify(error));
          });
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
  };

  render() {
    const Success_message = () => (
      <div style={{ padding: 50 }}>
        <h3 style={{ color: "green" }}>SUCCESSFUL UPLOAD</h3>
      </div>
    );
    return (
      <div>
        <center>
          {this.state.success ? <Success_message /> : null}
          <input
            onChange={this.handleChange}
            ref={ref => {
              this.uploadInput = ref;
            }}
            type="file"
          />
        </center>
      </div>
    );
  }
}

export default connect(
  null,
  { setImageUrl }
)(NewPostUpload);
