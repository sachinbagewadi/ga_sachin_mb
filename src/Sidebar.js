import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import axios from 'axios';

class Sidebar extends React.Component {
    constructor() {
        super()
        this.state={
            users:[]
        }
    }


    componentDidMount = () => {
       
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                const users = response.data
                this.setState({users})
            }) // success

            .catch((err)=> {
                console.log(err)
            })  //failure
    }

    render() {
        return <div className='Sidebar'>
       <h1>User Blog</h1>
      
        <h3><Link to="/home">Home</Link></h3>
        <h3><Link to="/users">Users  </Link></h3> 
        <ul>
                {this.state.users.map(user =>{
                return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                })}
            </ul>
        <h3><Link to="/posts">Posts</Link></h3>
      
  </div>;
    }

}





// function Sidebar() {
//   return <div className='Sidebar'>
//       <h1>SideBar</h1>
      
//             <h3><Link to="/home">Home</Link></h3>
//             <h3><Link to="/users">Users </Link></h3> 
//             <h3><Link to="/posts">Posts</Link></h3>
      
//   </div>;
// }

export default Sidebar;
