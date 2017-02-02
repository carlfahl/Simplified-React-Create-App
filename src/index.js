import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld2';


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
      return ('<tr><td>' + item.name + '</td><td>' + item.date + '</td><td>' + item.status + '</td><td> Complete </td></tr>');
    });
    return (
      <div>
        <table>
          <thead>
            <th><strong>Name</strong></th>
            <th><strong>Date</strong></th>
            <th><strong>Status</strong></th>
            <th><strong>Action</strong></th>
          </thead>
          <tbody>
            {trows}
          </tbody>
        </table>
      </div>
    );
  }
});

var MyApp = React.createClass({
  render: function () {
    return (
      <div>
        <HelloWorld />
        <TableListing />
      </div>
    );
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
