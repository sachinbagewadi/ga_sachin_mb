import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class CommentShow extends React.Component {
    constructor(){
        super()
        this.state = {
            users:{},
            info:[],
            post:{}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response)=>{
                const post=response.data
                axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then((response)=>{
                const users = response.data
                this.setState({users})
            })
            .catch((err)=>{
                console.log(err)
            })

                
                this.setState({post})
            })
            .catch((err)=>{
                console.log(err)
            })


        
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response)=>{
                const info = response.data
                this.setState({info})
            })
            .catch((err)=>{
                console.log(err)
            })
        
        
    }

    render(){
        return(
            <div className='CommentShow'>
                <h1>Detailed User and Post Information </h1>
                <h2>User name is -{this.state.users.name} </h2>

        <h2>Title- {this.state.post.title}</h2>

                <h3>Body - {this.state.post.body} </h3>

                <h4>Comments</h4>

                <ul>
                    {this.state.info.map(ele=>{
                    return <li key={ele.id}>{ele.body}</li>
                    })}
                </ul>
                <h2><Link to={`/users/${this.state.users.id}`}>More about users posts </Link></h2>
            </div>
        )
    }
}


export default CommentShow