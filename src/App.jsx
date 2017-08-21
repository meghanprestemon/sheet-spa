import React from 'react';
import { Segment, Container, Table, Menu, Icon, Label } from 'semantic-ui-react';
// import Spreadsheet from './components/Spreadsheet.js';

const App = () => (
  <div className="App">
    <Container>
      <Segment>
        <Spreadsheet />
      </Segment>
    </Container>
  </div>
);

export default App;
