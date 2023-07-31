import {Component} from "react";

import {postServices} from "../../services";
import {Post} from "./Post/Post";
import css from './Posts.module.css'


class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {posts: []}
    }
    componentDidMount() {
        postServices.getAll().then(({data})=> this.setState({posts:[...data]}))
    }

    render() {
        return(
            <div className={css.wrapper}>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {Posts}