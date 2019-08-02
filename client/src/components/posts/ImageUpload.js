import React, { Component } from "react";
import {
  Container,
  Menu,
  Icon,
  Image,
  Button,
  Form,
  TextArea
} from "semantic-ui-react";
// https://gist.github.com/hartzis/0b77920380736f98e4f9

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: ""
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <Image src={imagePreviewUrl} max-width="600" />;
    }

    return (
      <div className="feedImage">
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleImageChange} />
          <button type="submit" onClick={this._handleSubmit}>
            Upload Image
          </button>
        </form>
        {$imagePreview}
      </div>
    );
  }
}

export default ImageUpload;
