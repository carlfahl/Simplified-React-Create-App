import React from 'react';
import md5 from 'md5';

var G_URL = "http://gravatar.com/avatar";

var Gravatars = React.createClass({
  render: function() {
    var users = WheresOurData.map(function(user){
      var size = 36;
      var hash = md5(user.email);
      var url = G_URL + '/' + hash + '?s=' + size;
        return <li key={user.id}> <img src={url} width={size}/> {user.name}</li>
    });
    return (
      <div>
        <h1>Hello, Gravatars!</h1>
        wheres our HTML?
      </div>
    )
  }
})

export default Gravatars;
