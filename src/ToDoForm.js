import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

var ToDoForm = function (props) {
  return (
    <div>
      <Form onSubmit={props.onsubmit}>
        <FormGroup>
          <ControlLabel>New Todo Name: </ControlLabel>
          <FormControl type="text" placeholder="Todo Name" />
          <ControlLabel>Due Date: </ControlLabel>
          <FormControl type="date" placeholder="Due Date" />
        </FormGroup>
      </Form>
    </div>
  )
}

export default ToDoForm;
