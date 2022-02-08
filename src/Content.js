import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import PostShow from './PostShow'
import CommentShow from './CommentShow'

function Content() {
  return <div>
      
        
            <Route path="/home" component={Home} exact={true} />
            <Route path="/users" component={Users} exact={true}/>
            <Route path="/posts" component={Posts} exact = {true} />
            <Route path="/users/:id" component={PostShow} />
            <Route path="/comments/:id" component={CommentShow} />
        
  </div>;
}

export default Content;
