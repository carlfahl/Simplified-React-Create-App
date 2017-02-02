import React from 'react';
import {Jumbotron} from 'react-bootstrap';

var HelloWorld = React.createClass({
  render: function() {
    return (
      <Jumbotron>
        <h1>Hello, {this.props.name? this.props.name : 'World'}!!!</h1>
        <h2>It is good to be in the World</h2>
        <p>I hope it is for you as well!!</p>
      </Jumbotron>
    );
  }
});

export default HelloWorld;
