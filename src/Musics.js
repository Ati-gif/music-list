import React from "react";
import { Table, TableHeaderCell } from "semantic-ui-react";
import Music from "./Music";

const Musics = ({ musics, remove, editClicked }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <TableHeaderCell>Song Title</TableHeaderCell>
        <TableHeaderCell>Artist Name</TableHeaderCell>
        <TableHeaderCell>Options</TableHeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {musics.map((music) => (
  
        <Music
          editClicked={editClicked}
          remove={remove}
          key={music.id}
          {...music}
        />
      ))}
    </Table.Body>
  </Table>
);

export default Musics;
