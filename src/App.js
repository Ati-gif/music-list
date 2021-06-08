import React from "react";
import "./App.css";
import { Header, Segment, Button, Icon } from "semantic-ui-react";
import Musics from "./Musics";
import MusicForm from "./MusicForm";
import styled, { keyframes } from "styled-components";


class App extends React.Component {
  state = {
    musics: [
      { id: 1, title: "JavaScript Rock", artist: "John Fawcett" },
      { id: 2, title: "Code Anthem", artist: "Nirajan Timalsina" },
      { id: 3, title: "The JavaScript Rap", artist: "MC meSpeak" },
    ],
    showForm: true,
    isEditing: false,
    editMusicID: null,
  };
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  editClickHandler = (id) => {
    this.setState(
      {
        isEditing: true,
        showForm: false,
        editMusicID: id,
      },
      () =>
        this.setState({
          showForm: true,
        })
    );
  };
  addMusic = (music) => {
    let newMusic = { id: `${Math.random()}`, ...music };
    this.setState({ musics: [newMusic, ...this.state.musics] });
  };
  editMusic = (updatedMusicInfo) => {
    const editedMusics = this.state.musics.map((m) => {
      if (m.id !== this.state.editMusicID) return m;
      console.log(m);
      console.log(updatedMusicInfo);
      console.log({ ...m, ...updatedMusicInfo });
      return { ...m, ...updatedMusicInfo };
    });

    this.setState({
      musics: editedMusics,
      isEditing: false,
    });
  };
  deleteMusic = (id) => {
    const musics = this.state.musics.filter((m) => m.id !== id);
    this.setState({
      musics,
    });
  };
  getMusic = () => {
    const { musics, editMusicID } = this.state;
    return musics.find((m) => m.id === editMusicID);
  };
  render() {
    const { showForm, musics, isEditing } = this.state;
    const music = isEditing ? this.getMusic() : null;
    console.log(music);
    return (
      <AppContainer style={{ paddingTop: "20px" }}>
        <Header as="h1">Music List<Truncated>
          <Star>
            <Icon name="star" />
          </Star>
          <Star>
            <Icon name="star" />
          </Star>
          <Star>
            <Icon name="star" />
          </Star>
        </Truncated> </Header>
        <Segment as={Transparent}>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={showForm ? "angle double up" : "angle double down"} />
          </Button>
          {showForm && (
            <MusicForm
              music={music}
              getMusic={this.getmusic}
              isEditing={isEditing}
              edit={this.editMusic}
              add={this.addMusic}
            />
          )}
        </Segment>
        <Musics
          remove={this.deleteMusic}
          editClicked={this.editClickHandler}
          musics={musics}
        />
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, #97468c, #468c97);
  min-height: 100vh;
`;

const Transparent = styled.div`
  background: transparent !important;
`;
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  } 
  to{
    transform: rotate(360deg);
  }
 `;
const Star = styled.div`
  display: inline-block;
  color: #8acaba;
  text-shadow: 1px 2px 1px blue;
  animation: ${rotate360} 2s linear infinite;
  `;
  const Truncated = styled.div`
  white-space: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  overflow: hidden !important;
  -webkit-line-clamp: 2 !important; /* number of lines to show */
  -webkit-box-orient: vertical !important;
`;

export default App;
