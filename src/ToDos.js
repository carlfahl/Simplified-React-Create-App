import React from 'react';
import {Table, Button} from 'react-bootstrap';

var CompleteBtn = function (props) {
    return (<Button bsStyle="primary"
              onClick={props.handleClick}>Complete
            </Button>)
}

var TableCell = function (props) {
    return (<td>{props.value}</td>);
}

var TableRow = function (props) {
    return (<tr>
              <TableCell value={props.name} />
              <TableCell value={props.date} />
              <TableCell value={props.status} />
              <TableCell value={<CompleteBtn />} />
            </tr>);
}

var TableListing = React.createClass({
  getInitialState: function () {
    return {
      todos: [{name: 'Write todo app in React', date: '2/2/17', status: 'ToDo'},
              {name: 'Make Bears CRUD Api', date:'2/2/17', status:'Done'},
              {name: 'Make the Bears App Reactified', date: '2/2/17', status:'Done'}],
    };
  },
  render: function () {
    var trows = this.state.todos.map(function (item) {
      return (<TableRow name={item.name} date={item.date} status={item.status} />);
    });
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Table hover>
          <thead>
            <th><strong>Name</strong></th>
            <th><strong>Date</strong></th>
            <th><strong>Status</strong></th>
            <th><strong>Action</strong></th>
          </thead>
          <tbody>
            {trows}
          </tbody>
        </Table>
      </div>
    );
  }
});

export default TableListing;
