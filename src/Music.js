import React from "react";
import { Table, Button, Rating, Embed } from "semantic-ui-react";

const Music = ({ title, artist, remove, id, editClicked }) => (
  <Table.Row>
    <Table.Cell>{title}</Table.Cell>
    <Table.Cell>{artist}</Table.Cell>
    <Table.Cell>
      <Button onClick={() => remove(id)} button basic color="red" content="red">
        Delete
      </Button>
      <Button
        onClick={() => editClicked(id)}
        button
        basic
        color="green"
        content="green"
      >
        Edit
      </Button>
      <Button.Group>
        <Button icon="play" button basic color="violet" link href="https://www.hackreactor.com/blog/the-ultimate-songs-about-coding-playlist" rel="stylesheet" />
      </Button.Group>
      <Rating icon="star" defaultRating={3} maxRating={5} size='large'/>
      
    </Table.Cell>
  </Table.Row>
);

export default Music;
