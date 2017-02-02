import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld2';
import TableListing from './ToDos';

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
