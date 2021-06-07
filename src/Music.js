import React from "react";
import { Table, Button } from "semantic-ui-react";

const Music = ({ title, artist, remove, id, editClicked }) => (
  <Table.Row>
    <Table.Cell>{title}</Table.Cell>
    <Table.Cell>{artist}</Table.Cell>
    <Table.Cell>
      <Button onClick={() => remove(id)} button basic color='red' content='red'>
        Delete
      </Button>
      <Button onClick={() => editClicked(id)}  button basic color='teal' content='teal'>
        Edit
      </Button>
    </Table.Cell>
  </Table.Row>
);

export default Music;