import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import PostShow from './PostShow'
import CommentShow from './CommentShow'
import Sidebar from './Sidebar';
import Content from './Content'
import './App.css';



function App() {
    return (
        <BrowserRouter>
        <div className='App'>
            <Content/><Sidebar />
            

            <Route path="/home" component={Home} exact={true} />
            <Route path="/users" component={Users} exact={true}/>
            <Route path="/posts" component={Posts} exact = {true} />
            <Route path="/users/:id" component={PostShow} />
            <Route path="/comments/:id" component={CommentShow} />

        </div>
        </BrowserRouter>
    )
}




export default App