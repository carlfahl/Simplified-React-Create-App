import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Jumbotron} from 'react-bootstrap';

var HelloWorld = React.createClass({
  render: function() {
    return (
      <Jumbotron>
        <h1>Hello World!!!</h1>
        <h2>It is good to be in the World</h2>
        <p>I hope it is for you as well!!</p>
      </Jumbotron>
    );
  }
});

var TableListing = React.createClass({
  setInitialState: function () {
    return {
      todos: [{name: 'Write todo app in React', date: '2/2/17', status: 'ToDo'},
              {name: 'Make Bears CRUD Api', date:'2/2/17', status:'Done'},
              {name: 'Make the Bears App Reactified', date: '2/2/17', status:'Done'}],
    };
  },
  render: function () {
    var trows = this.state.todos.reduce(function (preVal, item) {
      return ('<tr><td>' + item.name + '</td><td>' + item.date + '</td><td>' + item.status + '</td><td> Complete </td></tr>');
    }, '');
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
  <MyApp />,
  document.getElementById('root')
);
