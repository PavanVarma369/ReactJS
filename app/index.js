var React = require('react');
var ReactDom = require('react-dom');

class Users extends React.Component {
  render() {
    var friend = this.props.list.filter(function(user){
      return user.friend === true;
    });

    var nonFriends = this.props.list. filter(function(user){
      return user.friend !== true;  
    });
    return(
      <div>
        <h1>Friends</h1>
        <ul>
          {friend.map(function(user){
            return <li key={user.name}>{user.name}</li>
          })}
        </ul>

         <h1>Non Friends</h1>
        <ul>
          {nonFriends.map(function(user){
            return <li key={user.name}>{user.name}</li>
          })}
        </ul>

      </div>
    )
  }
}

ReactDom.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} 
  />,
  document.getElementById('app')
);