import React from "react";
import { Form } from "semantic-ui-react";

export default class MusicForm extends React.Component {
  state = {
    title: this.props.music ? this.props.music.title : "",
    artist: this.props.music ? this.props.music.artist : "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.props.isEditing) {
      this.props.edit(this.state);
    } else {
      this.props.add(this.state);
    }

    this.setState({
      title: "",
      artist: "",
    });
  };

  handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Song Title Here"
            placeholder="enter song title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label="Artist Name Here"
            placeholder="enter artist name"
            name="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          />
          <Form.Button button basic color="blue">Submit</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}
