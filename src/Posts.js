import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Posts extends React.Component {
    constructor() {
        super() 
        this.state = {
            posts:[]
        }
    }

    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                const posts = response.data
                this.setState ({posts})
            })
            .catch((err)=>{
                console.log(err)
            })
    }


    render() {
        return(
            <div className='Posts'>
                <h2>All Posts- {this.state.posts.length}</h2>
                <ul>
                    {this.state.posts.map(post=>{
                    return <h3 key={post.id}><Link to={`/comments/${post.id}`}>{post.title}</Link></h3>
                    })}
                </ul>
 
            </div>
        )
    }
}

export default Posts