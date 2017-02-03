import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld2';
import TableListing from './ToDos';
import ToDoForm from './ToDoForm';
import NumberMapsAndFilters from './NumberMapsAndFilters';

var MyApp = React.createClass({
  render: function () {
    return (
      <div>
        <NumberMapsAndFilters />
        {/* <HelloWorld /> */}
        <ToDoForm />
        <TableListing title="Pending To Dos" />
        <TableListing title="Completed To Dos" />
      </div>
    );
  }
});

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);
