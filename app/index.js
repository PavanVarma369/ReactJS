var React = require('react');
var ReactDom = require('react-dom');
var PropTypes = require('prop-types');

class Badge extends React.Component{
  render(){
    return(
      <div>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width: 100, height:100}}
        />
        <h1>Name:{this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }

}

Badge.propTypes = {
img: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
username: PropTypes.string.isRequired

}

ReactDom.render(
   <Badge name="Pavan" 
   username='Pavan108'
   img={'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/12250032_1030616820323575_7621270882786979300_n.jpg?oh=e9fbf9de09733efc127fe7da7f30bf2f&oe=59BD492D'}/>,
   
  document.getElementById('app')
);