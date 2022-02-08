import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './App.css'

class Users extends React.Component {
    constructor() {
        super()
        this.state = {
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
        console.log(this.state.users)
        return (
        <div className='Users'>
            
            <h1>Users Info{this.state.users.length}</h1>
            <ul>
                {this.state.users.map(user =>{
                return <h3 key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></h3>
                })}
            </ul>
            
            
        </div>
        )

    }
}

export default Users